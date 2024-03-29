import { useLazyQuery } from '@apollo/client';
import { SEARCH_CHARACTER  } from '../../graphql/queries';
import Card from '../Card/Card';

const SearchBar = () => {
  const [search, { data }] = useLazyQuery(SEARCH_CHARACTER);
  console.log(data);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    search({ variables: { name } });
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="search" name="name" placeholder="Search character.." />
      <button type="submit">Search</button>
      {data && data.characters.results.map(character => (
      <Card key={character.id} character={character} />
    ))}
    </form>
  );
};

export default SearchBar;