import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import City from './components/City'
import Hospital from './components/Hospital'
import Airport from './components/airport'

function App({ textos }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-[177.78vh] aspect-video">
        <section id='App' className='font-roboto w-full h-full'>
          <Routes>
            <Route path="/*" element={<Home textos={textos} />} />
            <Route path='/home' element={<Home textos={textos} />} />
            <Route path='/aeropuertos' element={<Airport textos={textos} />} />
            <Route path='/ciudades' element={<City textos={textos} />} />
            <Route path='/hospitales' element={<Hospital textos={textos} />} />
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default App
