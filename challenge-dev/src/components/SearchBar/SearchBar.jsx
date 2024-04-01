import useSearchBar from '../../hooks/useSearchBar';
import Card from '../Card/Card';
import Filter from '../Filters/Filter';

const SearchBar = () => {
  const { handleSearch, setResults, results } = useSearchBar();

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="name"
        placeholder="Search character.."
      />
      <button type="submit">
        Search
      </button>
      <Filter onFilterApply={setResults} />
      <div className="flex flex-wrap justify-center"> {/* Contenedor para las tarjetas */}
        {results.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </form>
  );
};

export default SearchBar;
