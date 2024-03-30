import { gql } from '@apollo/client';

export const ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
      }
    }
  }
`;


export const SEARCH_CHARACTER = gql`
  query SearchCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        status
      }
    }
  }
`;

export const FILTER_CHARACTERS = gql`
  query FilterCharacters($status: String, $species: String, $gender: String) {
    characters(filter: { status: $status, species: $species, gender: $gender }) {
      results {
        id
        name
        image
        status
      }
    }
  }
`;