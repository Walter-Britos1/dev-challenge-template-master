import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ALL_CHARACTERS, SEARCH_CHARACTER } from '../graphql/queries';

const useSearchBar = () => {
  // Obtener personajes y datos de busqueda mediante queries
  const [getAll, { data: allData }] = useLazyQuery(ALL_CHARACTERS);
  const [search, { data: searchData }] = useLazyQuery(SEARCH_CHARACTER);

  // Estados para almacenar resultados y posibles errores
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Obtener personajes al montar el componente
  useEffect(() => {
    getAll({ variables: { page: 1 } });
  }, [getAll]);

  // Actualizar resultados al recibir la data de todos los personajes
  useEffect(() => {
    if (allData) {
      setResults(allData.characters.results);
    }
  }, [allData]);

  // Manejar busqueda de pesonajes
  const handleSearch = (event) => {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();
    // Crea un nuevo objeto para recopilar los datos del formulario de búsqueda
    const form = event.target;
    // Crea un nuevo obj para recopilar datos del formulario de busqueda
    const formData = new FormData(form); 
    // Obtiene el valor del campo de entrada 'name' del formulario
    const name = formData.get('name'); 
    // Utiliza la función search de useLazyQuery para buscar personajes por el nombre
    search({ variables: { name } });
  };

  // Manejar resultados y errores de busqueda
  useEffect(() => {
    if (searchData) {
      // Verificar si se obtienen resultados de la búsqueda de personaje
      if (searchData.characters.results.length > 0) {
        // Si se encuentran resultados, establecer los resultados y borrar cualquier mensaje de error
        setResults(searchData.characters.results);
        setError(null);
      } else {
        // Si no se encuentran resultados, establecer un mensaje de error
        setError('No characters with that name were found');
      }
    }
  }, [searchData]);

  // Restablecer los resultados al estado original
  const resetResults = async () => {
    // Restablece los resultados de la búsqueda a la lista completa de personajes
    const { data } = await getAll({ variables: { page: 1 } });
    if (data) {
      setResults(data.characters.results);
    }
  };

  // Manejar cambios en el input de busqueda
  const handleInputChange = (event) => {
    // Maneja el cambio en el campo de entrada de búsqueda. Si el campo está vacío, restablece los resultados de la búsqueda.
    const { value } = event.target;
    if (value === '') resetResults();
  };

  // Retonar funciones y estados
  return {
    handleSearch,
    setResults,
    results,
    getAll,
    error,
    handleInputChange,
  };
};

export default useSearchBar;
