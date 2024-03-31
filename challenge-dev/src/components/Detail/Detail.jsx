import { Link, useParams } from 'react-router-dom';
import useDetail from '../../hooks/useDetail';
import Loading from '../Loading/Loading';

const Detail = () => {
  const { id } = useParams();

  const { loading, error, data } = useDetail(id);

  if (loading) return <Loading />;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <Link to='/'>X</Link>
      <h1>{data.character.name}</h1>
      <img src={data.character.image} alt={data.character.name} />
      <p>Species: {data.character.species}</p>
      <p>Gender: {data.character.gender}</p>
      <p>Status: {data.character.status}</p>
      <p>Origin: {data.character.origin.name}</p>
      <p>Location: {data.character.location.name}</p>
    </div>
  )
};

export default Detail;