import textos from '../../public/textos.json'
import CloseBtn from './CloseBtn'
import { useState, useEffect, useRef } from 'react'

const InfoPopUp = ({ title, handleClose, section }) => {
  const popUpData = textos[section].popUps.find((item) => item.titulo === title)
  const images = popUpData.imagenes
  const imagesIndex = useRef(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('')

  const imagesElements = images.map((image, index) => (
    <img
      key={index}
      src={`assets/images/${section}/${image}`}
      alt=''
      className={`w-1/2 ${index === currentImageIndex ? fadeClass : ''}`}
    />
  ))

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
    const interval = setInterval(handleNextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='absolute top-0 left-0 flex size-full items-center justify-center pt-28'>
      <div className='relative flex h-[40rem] w-[87.5rem] flex-row gap-11 bg-white p-13'>
        <CloseBtn handleClose={handleClose} />

        {imagesElements[currentImageIndex]}

        <div className='flex w-[45%] max-w-[45%] flex-col'>
          <h2 className='-mt-1 mb-5 text-[1.75rem] font-bold'>{popUpData.titulo}</h2>
          <ul className='list-disc pl-4 text-[1rem]'>
            {popUpData.texto.map((texto, index) => (
              <li key={index} className='mb-0.25'>
                <span className='text-[1.475rem]/tight'>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InfoPopUp
