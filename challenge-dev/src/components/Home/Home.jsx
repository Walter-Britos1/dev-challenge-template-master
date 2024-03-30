import { useEffect, useState } from "react";
import { ALL_CHARACTERS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import SearchBar from "../SearchBar/SearchBar"

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data, fetchMore } = useQuery(ALL_CHARACTERS, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (data) {
      setCharacters((prev) => [...prev, ...data.characters.results]);
      if (data && data.characters && data.characters.info && data.characters.info.next) {
        fetchMore({
          variables: { page: data.characters.info.next },
        });
      }
      
    }
  }, [data, fetchMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Home;
