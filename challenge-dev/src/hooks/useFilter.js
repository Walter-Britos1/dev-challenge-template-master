import { useEffect, useState } from 'react';
import { FILTER_CHARACTERS, ALL_CHARACTERS } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';

const useFilter = ({ onFilterApply }) => {
  // Estado local para almacenar los valores de filtro
  const [filterValues, setFilterValues] = useState({
    status: '',
    species: '',
    gender: '',
  });
  // Consulta para aplicar filtros
  const [filter, { data: filterData }] = useLazyQuery(FILTER_CHARACTERS);
  // Consulta para obtener todos los personajes
  const [getAll, { data: allData }] = useLazyQuery(ALL_CHARACTERS);

  // Maneja el cambio de los valores de filtro
  const handleFilterChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  // Aplica los filtros seleccionados
  const applyFilters = () => {
    filter({ variables: filterValues });
  };

  // Restablece todos los filtros y obtiene todos los personajes nuevamente
  const resetFilters = () => {
    setFilterValues({
      status: '',
      species: '',
      gender: '',
    });
    onFilterApply([]);
    getAll({ variables: { page: 1 } });
  };

  // Aplica los resultados filtrados
  useEffect(() => {
    if (filterData) {
      onFilterApply(filterData.characters.results);
    }
  }, [filterData, onFilterApply]);

  // Aplicar los resultados de todos los personajes
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
