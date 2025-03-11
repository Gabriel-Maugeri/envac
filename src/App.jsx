import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import City from './components/City'
import Hospital from './components/Hospital'
import Airport from './components/airport'

function App() {
  return (
    <section id='App' className='font-roboto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aeropuertos' element={<Airport />} />
        <Route path='/ciudades' element={<City />} />
        <Route path='/hospitales' element={<Hospital />} />
      </Routes>
    </section>
  )
}

export default App
