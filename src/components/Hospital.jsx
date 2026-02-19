import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ShowLanguagesBtn from './ShowLanguagesBtn'

const Hospital = () => {
  const { textos } = useLanguage()  
  const [isInfoPopUpActive, setIsInfoPopUpActive] = useState(false)
  const [activeSliderIndex, setActiveSliderIndex] = useState(null)
  const [activePopUp, setActivePopUp] = useState('')

  const handlePopUp = (text) => {
    setIsInfoPopUpActive(!isInfoPopUpActive)
    setActivePopUp(text)
  }

  const handleSlider = (index = null) => {
    setActiveSliderIndex(index)
  }

  return (
    <section id='hospital' className='relative h-full w-full'>
      <img
        className={`absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover -z-10 ${isInfoPopUpActive || activeSliderIndex !== null ? 'animate-bright-out' : 'animate-bright-in'}`}
        src={`assets/imagenes/fondos/${textos.hospitales.imagenFondo}`}
        alt=''
        loading='lazy'
      />
      <Logo />
      <ShowLanguagesBtn />
      <BackBtn prevPage='/home' />

      <section
        id='hospital-contet'
        className='relative flex size-full flex-col items-end justify-between overflow-hidden'>
        <h1 className='font-display line animate-blow-in-modal mt-[3.5rem] mr-[17rem] w-[55rem] text-center text-6xl/tight text-gray-950'>
          {textos.hospitales.titulo}
        </h1>
        {isInfoPopUpActive || activeSliderIndex !== null ? (
          isInfoPopUpActive ? (
            <InfoPopUp
              title={activePopUp}
              handleClose={() => handlePopUp(activePopUp)}
              section='hospitales'
              textos={textos}
            />
          ) : (
            <Slider section={'hospitales'} sliderIndex={activeSliderIndex} handleClose={() => handleSlider(null)} textos={textos} />
          )
        ) : (
          <>
            {(Array.isArray(textos.hospitales.sliderPreview)
              ? textos.hospitales.sliderPreview
              : [textos.hospitales.sliderPreview]
            ).map((preview, i) => (
              <SliderPreview
                key={i}
                handleSlider={() => handleSlider(i)}
                section={'hospitales'}
                titulo={preview.titulo}
                image={preview.imagen}
                position={preview.posicion}
                className={isInfoPopUpActive ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}
              />
            ))}
            <div id='hospital-btns' className='absolute top-0 left-0 size-full'>
              {textos.hospitales.botones.map((btn, index) => (
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

export default Hospital
