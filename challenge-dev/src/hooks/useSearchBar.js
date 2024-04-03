import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ALL_CHARACTERS, SEARCH_CHARACTER } from '../graphql/queries'

const useSearchBar = () => {
  const [getAll, { data: allData }] = useLazyQuery(ALL_CHARACTERS);
  const [search, { data: searchData }] = useLazyQuery(SEARCH_CHARACTER);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); 

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
      if (searchData.characters.results.length > 0) { 
        setResults(searchData.characters.results);
        setError(null); 
      } else { 
        setError('No se encontraron personajes con ese nombre'); 
      }
    }
  }, [searchData]);

  return {
    handleSearch,
    setResults,
    results,
    getAll,
    error 
  }
}

export default useSearchBar;
