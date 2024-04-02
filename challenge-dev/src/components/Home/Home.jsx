import useHome from '../../hooks/useHome';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
  const { loading, error } = useHome();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message}/>;

  return  <SearchBar />
};

export default Home;
