import { useQuery } from '@apollo/client';
import { GET_CHARACTER_BY_ID } from '../graphql/queries';

const useDetail = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });
  return {
    loading,
    error,
    data,
  };
};

export default useDetail;   