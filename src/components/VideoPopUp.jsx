import { useState, useEffect, useRef } from 'react'
import CloseBtn from './CloseBtn'

const VideoPopUp = ({ video, handleClose }) => {
  const [animateOut, setAnimateOut] = useState(false)
  const videoRef = useRef(null)

  const onClose = () => {
    setAnimateOut(true)
    setTimeout(() => {
      handleClose()
    }, 500)
  }

  useEffect(() => {
    const videoElement = videoRef.current;

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.src = '';
        videoElement.load();
      }
    };
  }, []);

  return (
    <section
      className={`absolute top-0 left-0 flex size-full items-center justify-center pt-28 ${animateOut ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}`}>
      <div className='relative mt-[5%] flex h-[80%] w-[71%] flex-row gap-11 bg-white p-2'>
        <CloseBtn handleClose={onClose} />
        <video
          ref={videoRef}
          preload="metadata"
          playsInline
          autoPlay
          onEnded={onClose}
          className={`h-full w-full`}
          src={`assets/videos/${video}`}
        />
      </div>
    </section>
  )
}

export default VideoPopUp
