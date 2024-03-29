import { gql } from '@apollo/client';

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