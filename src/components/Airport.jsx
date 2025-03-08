import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import { useState } from 'react'
import textos from '../../public/textos.json'

const Airport = () => {
  const [isPopUpActive, setIsPopUpActive] = useState(false)
  const [activePopUp, setActivePopUp] = useState('')

  const handlePopUp = (text) => {
    setIsPopUpActive(!isPopUpActive)
    setActivePopUp(text)
  }

  return (
    <section id='airport' className='relative h-full w-full'>
      <img
        className={`bg-img absolute -z-10 ${isPopUpActive ? 'brightness-50' : ''}`}
        src='assets/images/fondos/fondo_aeropuerto.jpg'
        alt=''
      />
      <Logo />
      <BackBtn prevPage='/' />

      <section
        id='airport-contet'
        className='relative flex h-screen flex-col items-end justify-between pt-[3.5rem]'>
        <h1 className='font-display line mr-[13rem] ml-[15rem] w-[45.25rem] text-center text-6xl/tight text-gray-950'>
          {textos.aeropuertos.titulo}
        </h1>
        {isPopUpActive ? (
          <InfoPopUp title={activePopUp} handlePopUp={handlePopUp} />
        ) : (
          <div id='airport-btns' className='absolute top-0 left-0 size-full'>
            {textos.aeropuertos.botones.map((btn, index) => (
              <InfoBtn
                key={index}
                handlePopUp={() => handlePopUp(btn.texto)}
                text={btn.texto}
                position={btn.posicion}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default Airport
