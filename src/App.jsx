import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import City from './components/City'
import Hospital from './components/Hospital'
import Airport from './components/airport'

function App() {
  return (
    <section id='App' className='font-roboto'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aeropuertos' element={<Airport />}></Route>
        <Route path='/ciudades' element={<City />}></Route>
        <Route path='/hospitales' element={<Hospital />}></Route>
      </Routes>
    </section>
  )
}

export default App
