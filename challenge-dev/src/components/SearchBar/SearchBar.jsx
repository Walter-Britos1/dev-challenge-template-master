import useSearchBar from '../../hooks/useSearchBar';
import Card from '../Card/Card';
import Filter from '../Filters/Filter';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const { handleSearch, setResults, results, getAll } = useSearchBar();

  return (
    <>
      <form onSubmit={handleSearch}
        style={{
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
          borderRadius: '5px',
          boxSizing: 'border-box',
        }}>
          
        <input
          type='search'
          name='name'
          placeholder='Search character...'
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          onChange={async (event) => {
            if (event.target.value === '') {
              const { data } = await getAll({ variables: { page: 1 } });
              if (data) {
                setResults(data.characters.results);
              }
            }
          }}
        />

        <button
          style={{
            backgroundColor: '#007bff',
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
