import textos from '../../public/textos.json'
import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'

const City = () => {
  const [isInfoPopUpActive, setIsInfoPopUpActive] = useState(false)
  const [isSliderActive, setIsSliderActive] = useState(false)
  const [activePopUp, setActivePopUp] = useState('')

  const handlePopUp = (text) => {
    setIsInfoPopUpActive(!isInfoPopUpActive)
    setActivePopUp(text)
  }

  const handleSlider = () => {
    setIsSliderActive(!isSliderActive)
  }

  return (
    <section id='City' className='relative h-full w-full'>
      <img
        className={`bg-img absolute -z-10 ${isInfoPopUpActive || isSliderActive ? 'animate-bright-out' : 'animate-bright-in'}`}
        src='assets/images/fondos/fondo_ciudad.jpg'
        alt=''
        loading='lazy'
      />
      <Logo />
      <BackBtn prevPage='/' />

      <section
        id='City-contet'
        className='relative flex h-screen flex-col items-end justify-between overflow-hidden'>
        <h1 className='font-display line animate-blow-in-modal mt-[3.5rem] mr-[15rem] ml-[15rem] w-[45.25rem] text-center text-6xl/tight text-gray-950'>
          {textos.ciudades.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp
              title={activePopUp}
              handleClose={() => handlePopUp(activePopUp)}
              section='ciudades'
            />
          ) : (
            <Slider section={'ciudades'} handleClose={handleSlider} />
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'ciudades'}
              titulo={textos.ciudades.sliderPreview.titulo}
              image={textos.ciudades.sliderPreview.imagen}
              position={textos.ciudades.sliderPreview.posicion}
              className={isInfoPopUpActive ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}
            />
            <div id='City-btns' className='absolute top-0 left-0 size-full'>
              {textos.ciudades.botones.map((btn, index) => (
                <InfoBtn
                  key={index}
                  handlePopUp={() => handlePopUp(btn.texto)}
                  text={btn.texto}
                  position={btn.posicion}
                  className={isInfoPopUpActive ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </section>
  )
}

export default City
