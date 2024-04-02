import useFilter from '../../hooks/useFilter';

const Filter = ({ onFilterApply }) => {
  const { handleFilterChange, applyFilters } = useFilter({ onFilterApply });

  return (
    <div className='w-full flex items-center space-x-4'
      style={{
        padding: '10px',
        borderRadius: '5px'
      }}>
      <div className='flex flex-col flex-grow'>
        <label className='text-gray-600 font-semibold' htmlFor='status'>Filter by status</label>
        <select
          className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400'
          name='status'
          id='status'
          onChange={handleFilterChange}
        >
          <option disabled selected>(select option)</option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>

      <div className='flex flex-col flex-grow'>
        <label className='text-gray-600 font-semibold' htmlFor='species'>Filter by species</label>
        <select
          className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400'
          name='species'
          id='species'
          onChange={handleFilterChange}
        >
          <option disabled selected>(select option)</option>
          <option value='human'>Human</option>
          <option value='alien'>Alien</option>
        </select>
      </div>

      <div className='flex flex-col flex-grow'>
        <label className='text-gray-600 font-semibold' htmlFor='gender'>Filter by gender</label>
        <select
          className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400'
          name='gender'
          id='gender'
          onChange={handleFilterChange}
        >
          <option disabled selected>(select option)</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='unknown'>Unknown</option>
        </select>
      </div>

      <button
        type='button'
        onClick={applyFilters}
        className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-400'
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;


