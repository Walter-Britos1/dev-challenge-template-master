import { Link, useParams } from 'react-router-dom';
import useDetail from '../../hooks/useDetail';
import Loading from '../Loading/Loading';

const Detail = () => {
  const { id } = useParams();

  const { loading, error, data } = useDetail(id);

  if (loading) return <Loading />;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 bg-opacity-50 text-white shadow-lg rounded-lg p-8 flex md:flex-row flex-col relative">
        <Link to='/' className="absolute top-0 right-0 text-white hover:text-gray-300 text-2xl">×</Link>
        <div className="flex-1">
          <img className="w-64 h-64 object-cover rounded-lg shadow-md" src={data.character.image} alt={data.character.name} />
        </div>
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-2">{data.character.name}</h2>
          <p><strong>Species:</strong> {data.character.species}</p>
          <p><strong>Gender:</strong> {data.character.gender}</p>
          <p><strong>Status:</strong> {data.character.status}</p>
          <p><strong>Origin:</strong> {data.character.origin.name}</p>
          <p><strong>Location:</strong> {data.character.location.name}</p>
        </div>
      </div>
    </div>
  )
};

export default Detail;