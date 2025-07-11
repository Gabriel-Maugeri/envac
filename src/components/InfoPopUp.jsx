import CloseBtn from './CloseBtn'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const InfoPopUp = ({ title, handleClose, section }) => {
  const { textos } = useLanguage()
  const popUpData = textos[section].popUps.find(
    (item) => item.titulo.toLowerCase() === title.toLowerCase()
  )
  const images = popUpData.imagenes
  const imagesIndex = useRef(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('animate-fade-in')
  const [animateOut, setAnimateOut] = useState(false)
  const ulContainerRef = useRef(null)
  const ulRef = useRef(null)

  const handleNextImage = () => {
    if (images) {
      setFadeClass('animate-fade-out')
      setTimeout(() => {
        imagesIndex.current = (imagesIndex.current + 1) % images.length
        setCurrentImageIndex(imagesIndex.current)
        setFadeClass('animate-fade-in')
      }, 750)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(handleNextImage, 3500)
      handleNextImage()
      return () => clearInterval(interval)
    }, 2750)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const ulContainerHeight = ulContainerRef.current.clientHeight
    const ulHeight = ulRef.current.clientHeight
    const heightRelation = ulHeight / ulContainerHeight
    if (heightRelation < 0.6) {
      ulContainerRef.current.childNodes[1].style.gap = '1.425rem'
    }
  }, [popUpData.texto])

  const onClose = () => {
    setAnimateOut(true)
    setTimeout(() => {
      handleClose()
    }, 500)
  }

  return (
    <section
      className={`absolute top-0 left-0 flex size-full items-center justify-center pt-28 ${animateOut ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}`}>
      <div className='relative flex h-[40rem] w-[87.5rem] flex-row gap-11 bg-white p-13'>
        <CloseBtn handleClose={onClose} />

        <div className='relative h-full w-1/2'>
          {images.map((image, index) => (
            <img
              key={index}
              src={`assets/imagenes/${section}/${image}`}
              alt=''
              loading='lazy'
              className={`absolute w-full transition-opacity duration-750 ${
                index === currentImageIndex ? fadeClass + ' opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div ref={ulContainerRef} className='flex w-[45%] max-w-[45%] flex-col'>
          <h2 className='-mt-1 mb-5 text-[1.75rem] font-bold'>{popUpData.titulo}</h2>
          <ul ref={ulRef} className='flex list-disc flex-col pl-4'>
            {popUpData.texto.map((texto, index) => (
              <li key={index} className='mb-0.25'>
                <span className='text-[1.425rem]/tight font-light'>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InfoPopUp
