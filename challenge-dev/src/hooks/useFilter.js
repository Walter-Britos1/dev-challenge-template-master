import { useEffect, useState } from 'react';
import { FILTER_CHARACTERS, ALL_CHARACTERS } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';

const useFilter = ({ onFilterApply }) => {
  const [filterValues, setFilterValues] = useState({
    status: '',
    species: '',
    gender: '',
  });
  const [filter, { data: filterData }] = useLazyQuery(FILTER_CHARACTERS);
  const [getAll, { data: allData }] = useLazyQuery(ALL_CHARACTERS);

  const handleFilterChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const applyFilters = () => {
    filter({ variables: filterValues });
  };

  const resetFilters = () => {
    setFilterValues({
      status: '',
      species: '',
      gender: '',
    });
    onFilterApply([]);
    getAll({ variables: { page: 1 } });
  };

  useEffect(() => {
    if (filterData) {
      onFilterApply(filterData.characters.results);
    }
  }, [filterData, onFilterApply]);

  useEffect(() => {
    if (allData) {
      onFilterApply(allData.characters.results);
    }
  }, [allData, onFilterApply]);

  return {
    filterValues,
    handleFilterChange,
    applyFilters,
    resetFilters,
  };
};

export default useFilter;
