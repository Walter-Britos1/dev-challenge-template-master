import { useEffect, useState } from 'react';
import { FILTER_CHARACTERS } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';

const useFilter = ({ onFilterApply }) => {
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
  return {
    filterValues,
    handleFilterChange,
    applyFilters,
  };
}

export default useFilter;