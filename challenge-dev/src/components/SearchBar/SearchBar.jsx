import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ALL_CHARACTERS, SEARCH_CHARACTER } from '../../graphql/queries';
import Card from '../Card/Card';
import Filter from "../Filters/Filter"

const SearchBar = () => {
  const [getAll, { data: allData }] = useLazyQuery(ALL_CHARACTERS);
  const [search, { data: searchData }] = useLazyQuery(SEARCH_CHARACTER);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAll({ variables: { page: 1 } });
  }, [getAll]);

  useEffect(() => {
    if (allData) {
      setResults(allData.characters.results);
    }
  }, [allData]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    search({ variables: { name } });
  };


  useEffect(() => {
    if (searchData) {
      setResults(searchData.characters.results);
    }
  }, [searchData]);

  return (
    <form onSubmit={handleSearch}>
      <input type="search" name="name" placeholder="Search character.." />
      <button type="submit">Search</button>
      <Filter onFilterApply={setResults}/>
      {results.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </form>
  );
};

export default SearchBar;
