import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'

function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;
