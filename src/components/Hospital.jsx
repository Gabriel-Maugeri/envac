import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'

const Hospital = ({ textos }) => {
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
    <section id='hospital' className='relative h-full w-full'>
      <img
        className={`absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover -z-10 ${isInfoPopUpActive || isSliderActive ? 'animate-bright-out' : 'animate-bright-in'}`}
        src={`assets/imagenes/fondos/${textos.hospitales.imagenFondo}`}
        alt=''
        loading='lazy'
      />
      <Logo />
      <BackBtn prevPage='/home' />

      <section
        id='hospital-contet'
        className='relative flex size-full flex-col items-end justify-between overflow-hidden'>
        <h1 className='font-display line animate-blow-in-modal mt-[3.5rem] mr-[8rem] w-[55.25rem] text-center text-6xl/tight text-gray-950'>
          {textos.hospitales.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp
              title={activePopUp}
              handleClose={() => handlePopUp(activePopUp)}
              section='hospitales'
              textos={textos}
            />
          ) : (
            <Slider section={'hospitales'} handleClose={handleSlider} textos={textos} />
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'hospitales'}
              titulo={textos.hospitales.sliderPreview.titulo}
              image={textos.hospitales.sliderPreview.imagen}
              position={textos.hospitales.sliderPreview.posicion}
              className={isInfoPopUpActive ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}
            />
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
