import textos from '../../public/textos.json'
import Logo from './Logo'
import BackBtn from './backBtn'
import InfoBtn from './InfoBtn'
import InfoPopUp from './InfoPopUp'
import SliderPreview from './SliderPreview'
import Slider from './Slider'
import { useState } from 'react'

const Hospital = () => {
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
        className={`bg-img absolute -z-10 ${isInfoPopUpActive || isSliderActive ? 'brightness-50' : ''}`}
        src='assets/images/fondos/fondo_hospital.jpg'
        alt=''
      />
      <Logo />
      <BackBtn prevPage='/' />

      <section
        id='hospital-contet'
        className='relative flex h-screen flex-col items-end justify-between pt-[3.5rem]'>
        <h1 className='font-display mr-40 w-[50.25rem] text-center text-6xl/tight text-gray-950'>
          {textos.hospitales.titulo}
        </h1>
        {isInfoPopUpActive || isSliderActive ? (
          isInfoPopUpActive ? (
            <InfoPopUp title={activePopUp} handleClose={handlePopUp} section='hospitales' />
          ) : (
            <div className='relative flex h-full w-full items-center justify-center'>
              <Slider section={'hospitales'} handleClose={handleSlider} />
            </div>
          )
        ) : (
          <>
            <SliderPreview
              handleSlider={handleSlider}
              section={'hospitales'}
              titulo={textos.hospitales.sliderPreview.titulo}
              image={textos.hospitales.sliderPreview.imagen}
              position={textos.hospitales.sliderPreview.posicion}
            />
            <div id='airport-btns' className='absolute top-0 left-0 size-full'>
              {textos.hospitales.botones.map((btn, index) => (
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

export default Hospital
