import { useEffect, useState } from "react";
import { ALL_CHARACTERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useHome = () => {
  // Almacena los personajes obtenidos de la consulta GraphQL
  const [characters, setCharacters] = useState([]);
  // Obtenemos los resultados mediante queries
  const { loading, error, data, fetchMore } = useQuery(ALL_CHARACTERS, {
    variables: { page: 1 },
  });

  useEffect(() => {
    // Verifica si hay datos disponibles
    if (data) 
    setCharacters((prev) => [...prev, ...data.characters.results]);
    // Actualiza el estado de los personajes concatenando los resultados actuales con los nuevos resultados
  }, [data, fetchMore]);
  
  
  // Retornamos las funciones y estados
  return { characters, loading, error };
}

export default useHome;