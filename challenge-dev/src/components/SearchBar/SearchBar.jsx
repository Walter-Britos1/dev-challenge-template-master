import useSearchBar from '../../hooks/useSearchBar';
import Card from '../Card/Card';
import Filter from '../Filters/Filter';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const { handleSearch, setResults, results } = useSearchBar();

  return (
    <>
      <form onSubmit={handleSearch}
        style={{
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
          borderRadius: '5px'
        }}>
        <input
          type='search'
          name='name'
          placeholder='Search character...'
          style={{
            borderRadius: '5px'
          }}
        />
        <button
          style={{
            backgroundColor:'#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          type='submit'
        >
          <Search />
        </button>
      </form>
      <Filter onFilterApply={setResults} />
      <div className='flex flex-wrap justify-center'>
        {results.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};

export default SearchBar;

