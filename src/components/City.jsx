import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ShowLanguagesBtn from './ShowLanguagesBtn'

const City = () => {
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
    <section id='city' className='relative h-full w-full'>
      <img
        className={`absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover -z-10 ${isInfoPopUpActive || isSliderActive ? 'animate-bright-out' : 'animate-bright-in'}`}
        src={`assets/imagenes/fondos/${textos.ciudades.imagenFondo}`}
        alt=''
        loading='lazy'
      />
      <Logo />
      <ShowLanguagesBtn />
      <BackBtn prevPage='/home' />

      <section
        id='city-contet'
        className='relative flex size-full flex-col items-center justify-between overflow-hidden'>
        <h1 className='font-display line animate-blow-in-modal mt-[5rem] ml-[5rem] w-[37rem] text-center text-6xl/tight text-gray-950'>
          {textos.ciudades.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp
              title={activePopUp}
              handleClose={() => handlePopUp(activePopUp)}
              section='ciudades'
              textos={textos}
            />
          ) : (
            <Slider section={'ciudades'} handleClose={handleSlider} textos={textos} />
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
            <div id='city-btns' className='absolute top-0 left-0 size-full'>
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
