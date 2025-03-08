import Logo from './Logo'
import SectionBtn from './SectionBtn'
import ViewMoreBtn from './ViewMoreBtn'
import BackBtn from './backBtn'
import VideoPopUp from './VideoPopUp'
import { useState } from 'react'

const Home = () => {
  const [popUpActive, setPopUpActive] = useState(false)

  const handlePopUp = () => {
    setPopUpActive(!popUpActive)
  }

  return (
    <section id='home' className='relative h-screen overflow-hidden'>
      <section
        className={`absolute -z-10 flex h-full w-full items-center justify-center ${popUpActive ? 'brightness-50' : ''}`}>
        <video
          id='bg-home'
          className='absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover'
          src='assets/images/fondos/fondo_home.mp4'
          loop
          autoPlay
          muted
        />
      </section>

      {popUpActive ? (
        <button
          className='bg-primary absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
          onClick={handlePopUp}>
          <img src='assets/images/otros/volver.png' alt='boton ver mas' />
        </button>
      ) : (
        <ViewMoreBtn handlePopUp={handlePopUp}></ViewMoreBtn>
      )}

      <Logo />
      <section
        id='home-content'
        className='relative flex h-screen flex-col items-center justify-between pt-[5rem]'>
        {popUpActive ? (
          <>
            <h1 className='font-display w-[70rem] text-center text-6xl/tight text-gray-950'>
              Gestión de Residuos <br /> Inteligente y Sostenible
            </h1>
            <section id='video-container' className='absolute top-[38%] flex flex-row gap-20'>
              <VideoPopUp />
              <VideoPopUp />
            </section>
          </>
        ) : (
          <>
            <p className='font-display w-[70rem] text-center text-6xl/tight text-gray-950'>
              Sistemas de recogida neumática para ciudades más humanas y sostenibles.
            </p>
            <div
              id='home-btns'
              className='absolute top-1/3 flex h-52 w-full flex-row items-center justify-center gap-[9rem]'>
              <SectionBtn text={'Aeropuertos'} section='aeropuertos' imgName='aeropuertos' />
              <SectionBtn text={'Ciudades'} section='ciudades' imgName='ciudades' />
              <SectionBtn text={'Hospitales'} section='hospitales' imgName='hospitales' />
            </div>
          </>
        )}
      </section>
    </section>
  )
}

export default Home
