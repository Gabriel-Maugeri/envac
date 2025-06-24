import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ShowLanguagesBtn from './ShowLanguagesBtn'

const Airport = () => {
  const { textos } = useLanguage()  
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
        className={`absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover -z-10 ${isInfoPopUpActive || isSliderActive ? 'animate-bright-out' : 'animate-bright-in'}`}
        src={`assets/imagenes/fondos/${textos.aeropuertos.imagenFondo}`}
        alt=''
        loading='lazy'
      />
      <Logo />
      <ShowLanguagesBtn />
      <BackBtn prevPage='/home' />

      <section
        id='airport-contet'
        className='relative flex size-full flex-col items-end justify-between overflow-hidden'>
        <h1 className='font-display line animate-blow-in-modal mt-[3.5rem] mr-[18rem] w-[45.25rem] text-center text-6xl/tight text-gray-950'>
          {textos.aeropuertos.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp
              title={activePopUp}
              handleClose={() => handlePopUp(activePopUp)}
              section='aeropuertos'
              textos={textos}
            />
          ) : (
            <Slider section={'aeropuertos'} handleClose={handleSlider} textos={textos} />
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'aeropuertos'}
              titulo={textos.aeropuertos.sliderPreview.titulo}
              image={textos.aeropuertos.sliderPreview.imagen}
              position={textos.aeropuertos.sliderPreview.posicion}
              className={
                isInfoPopUpActive || isSliderActive
                  ? 'animate-blow-out-modal'
                  : 'animate-blow-in-modal'
              }
            />
            <div
              id='airport-btns'
              className='animate-blow-in-modal absolute top-0 left-0 size-full'>
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
