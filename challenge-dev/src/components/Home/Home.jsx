import useHome from '../../hooks/useHome';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
  const { loading, error } = useHome();

  if (loading) return <Loading />;
  if (error) return <p>Error :{error.message}</p>;

  return  <SearchBar />


};

export default Home;
