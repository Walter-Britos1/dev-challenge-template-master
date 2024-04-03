import { CornerDownLeft } from 'lucide-react';
import { Link } from 'react-router-dom'

const Error = ({ message }) => {

  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-white p-8 rounded shadow-md w-1/3'>
      <h1 className='text-2xl font-bold mb-4'>Error</h1>
      <p className='mb-4'>{message}</p>
      <Link to='/' className='flex items-center text-blue-500 hover:underline'>
        <CornerDownLeft className='h-6 w-6 mr-2' /> Go Back
      </Link>
    </div>
  </div>
  )
}

export default Error;