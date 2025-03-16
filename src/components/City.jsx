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
    <section id='city' className='relative h-full w-full'>
      <img
        className={`bg-img absolute -z-10 ${isInfoPopUpActive || isSliderActive ? 'brightness-50' : ''}`}
        src='assets/images/fondos/fondo_ciudad.jpg'
        alt=''
      />
      <Logo />
      <BackBtn prevPage='/' />

      <section
        id='city-contet'
        className='relative flex h-screen flex-col items-center justify-between pt-[3.5rem]'>
        <h1 className='font-display ml-30 w-[45.25rem] pl-20 text-center text-6xl/tight text-gray-950'>
          {textos.ciudades.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp title={activePopUp} handleClose={handlePopUp} section='ciudades' />
          ) : (
            <div className='relative flex h-full w-full items-center justify-center'>
              <Slider section={'ciudades'} handleClose={handleSlider} />
            </div>
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'ciudades'}
              titulo={textos.ciudades.sliderPreview.titulo}
              image={textos.ciudades.sliderPreview.imagen}
              position={textos.ciudades.sliderPreview.posicion}
            />
            <div id='airport-btns' className='absolute top-0 left-0 size-full'>
              {textos.ciudades.botones.map((btn, index) => (
                <InfoBtn
                  key={index}
                  handlePopUp={() => handlePopUp(btn.texto)}
                  text={btn.texto}
                  position={btn.posicion}
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
