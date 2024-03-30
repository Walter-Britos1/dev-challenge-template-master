import useHome from '../../hooks/useHome';
import SearchBar from "../SearchBar/SearchBar"

const Home = () => {
  const { loading, error } = useHome();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;
