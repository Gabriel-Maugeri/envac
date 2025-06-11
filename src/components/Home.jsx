import Logo from './Logo'
import SectionBtn from './SectionBtn'
import ViewMoreBtn from './ViewMoreBtn'
import BackBtn from './backBtn'
import VideoPopUp from './VideoPopUp'
import VideoBtn from './VideoBtn'
import { useState } from 'react'

const Home = ({ textos }) => {
  const [popUpActive, setPopUpActive] = useState(false)
  const [videoActive, setVideoActive] = useState(false)
  const [activeVideo, setActiveVideo] = useState('')

  const handleVideo = (video) => {
    setVideoActive(!videoActive)
    setActiveVideo(video)
  }

  const handlePopUp = () => {
    if (videoActive) {
      setVideoActive(!videoActive)
      setActiveVideo('')
    }
    setPopUpActive(!popUpActive)
  }

  return (
    <section id='home' className='relative size-full overflow-hidden'>
      <section
        className={`absolute -z-10 flex h-full w-full items-center justify-center ${popUpActive ? 'brightness-50' : ''}`}>
        <video
          id='bg-home'
          className='absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover'
          src={`assets/videos/${textos.inicio.videoFondo}`}
          loop
          autoPlay
          muted
        />
      </section>

      {popUpActive ? (
        <button
          className='bg-primary animate-blow-in-modal absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
          onClick={handlePopUp}>
          <img src='assets/imagenes/otros/volver.png' alt='boton ver mas' loading='lazy' className='h-auto w-[60%]' />
        </button>
      ) : (
        <ViewMoreBtn handlePopUp={handlePopUp} />
      )}

      <Logo />
      <section
        id='home-content'
        className='relative flex h-full flex-col items-center justify-between pt-[5rem]'>
        {popUpActive ? (
          <>
            <h1 className='font-display animate-blow-in-modal w-[40%] text-center text-6xl/tight text-gray-950'>
              {textos.inicio.tituloVideos}
            </h1>
            {videoActive ? (
              <VideoPopUp video={activeVideo} handleClose={() => handleVideo('')} />
            ) : (
              <section id='video-container' className='absolute top-[38%] flex flex-row gap-20'>
                <VideoBtn video={textos.inicio.video1} handleVideo={handleVideo} />
                <VideoBtn video={textos.inicio.video2} handleVideo={handleVideo} />
              </section>
            )}
          </>
        ) : (
          <>
            <p className='font-display animate-blow-in-modal w-[70rem] text-center text-6xl/tight text-gray-950'>
              {textos.inicio.titulo}
            </p>
            <div
              id='home-btns'
              className='absolute top-1/3 flex w-full flex-row items-center justify-center gap-[7.5%]'>
              <SectionBtn text={textos.inicio.botones[0].texto} section='/aeropuertos' imgName={textos.inicio.botones[0].imagen} />
              <SectionBtn text={textos.inicio.botones[1].texto} section='/ciudades' imgName={textos.inicio.botones[1].imagen} />
              <SectionBtn text={textos.inicio.botones[2].texto} section='/hospitales' imgName={textos.inicio.botones[2].imagen} />
            </div>
          </>
        )}
      </section>
    </section>
  )
}

export default Home
