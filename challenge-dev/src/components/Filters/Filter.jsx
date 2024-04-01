import useFilter from "../../hooks/useFilter";

const Filter = ({ onFilterApply }) => {
  const { handleFilterChange, applyFilters } = useFilter({ onFilterApply });

  return (
    <div>
      <div>
        <label htmlFor="status">Filter by status</label>
        <select
          name="status"
          id="status"
          onChange={handleFilterChange}
        >
          <option value="">Any status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label htmlFor="species">Filter by specie</label>
        <select
          name="species"
          id="species"
          onChange={handleFilterChange}
        >
          <option value="">Any species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
      </div>

      <div>
        <label htmlFor="gender">Filter by gender</label>
        <select
          name="gender"
          id="gender"
          onChange={handleFilterChange}
        >
          <option value="">Any gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button
        type='button'
        onClick={applyFilters}
      >
        Apply filters
      </button>
    </div>
  );
};

export default Filter;

