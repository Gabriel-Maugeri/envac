import textos from '../../public/textos.json'
import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'

const Airport = () => {
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
    <section id='airport' className='relative h-full w-full'>
      <img
        className={`bg-img absolute -z-10 ${isInfoPopUpActive || isSliderActive ? 'brightness-50' : ''}`}
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
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp title={activePopUp} handleClose={handlePopUp} section='aeropuertos' />
          ) : (
            <div className='relative flex h-full w-full items-center justify-center'>
              <Slider section={'aeropuertos'} handleClose={handleSlider} />
            </div>
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'aeropuertos'}
              titulo={textos.aeropuertos.sliderPreview.titulo}
              image={textos.aeropuertos.sliderPreview.imagen}
              position={textos.aeropuertos.sliderPreview.posicion}
            />
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
          </>
        )}
      </section>
    </section>
  )
}

export default Airport
