import { Link } from 'react-router-dom';

const Card = ({ character }) => {
  return (
    <div>
      <Link to={`/${character.id}`}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      </Link>
    </div>
  )
};

export default Card;