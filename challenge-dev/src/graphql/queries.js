import { gql } from '@apollo/client';

// Query para obtener todos los personajes 
export const ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

// Query para buscar personajes por nombre 
export const SEARCH_CHARACTER = gql`
  query SearchCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

// Query para filtrar personajes
export const FILTER_CHARACTERS = gql`
  query FilterCharacters($status: String, $species: String, $gender: String) {
    characters(filter: { status: $status, species: $species, gender: $gender }) {
      results {
        id
        name
        image
      }
    }
  }
`;

// Query para obtener personaje mediante id
export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`