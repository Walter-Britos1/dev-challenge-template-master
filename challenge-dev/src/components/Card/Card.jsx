const Card = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />

    </div>
  )
};

export default Card;