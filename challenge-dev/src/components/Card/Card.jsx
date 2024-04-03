import { Link } from 'react-router-dom';

const Card = ({ character }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 shadow-lg rounded-lg overflow-hidden relative'>
      <Link to={`/${character.id}`}>
        <img className='w-full h-64 object-cover' src={character.image} alt={character.name} />
        <div className='px-6 py-4 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-center'>
          <h2 className='font-bold text-xl mb-2 text-green-400'>{character.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;


