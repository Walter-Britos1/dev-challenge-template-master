import rickLoading from '../../imgs/rickLoading.gif';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img className='w-64 h-64 object-cover mb-4' src={rickLoading} alt='Rick Loading...' />
      <h1 className='text-white text-2xl text-center'>Loading...</h1>
    </div>
  )
}

export default Loading;