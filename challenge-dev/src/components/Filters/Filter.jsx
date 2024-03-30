import { useState,  useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FILTER_CHARACTERS } from '../../graphql/queries';

const Filter = ({ onFilterApply }) => {
  const [filterValues, setFilterValues] = useState({ status: '', species: '', gender: '' });
  const [filter, { data: filterData }] = useLazyQuery(FILTER_CHARACTERS);

  const handleFilterChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const applyFilters = () => {
    filter({ variables: filterValues });
  };

  useEffect(() => {
    if (filterData) {
      onFilterApply(filterData.characters.results);
    }
  }, [filterData, onFilterApply]);


  return (
    <div>
      <label htmlFor="status">Filter by status</label>
      <select name="status" id="status" onChange={handleFilterChange}>
        <option value="">Any status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <label htmlFor="species">Filter by specie</label>
      <select name="species" id="species" onChange={handleFilterChange}>
        <option value="">Any species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>

      <label htmlFor="gender">Filter by gender</label>
      <select name="gender" id="gender" onChange={handleFilterChange}>
        <option value="">Any gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>

      <button type='button' onClick={applyFilters} >Apply filters</button>
    </div>
  );
};

export default Filter;
