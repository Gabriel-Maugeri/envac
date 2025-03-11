import textos from '../../public/textos.json'
import { useState, useRef } from 'react'
import CloseBtn from './CloseBtn'

const Slider = ({ section, handleClose }) => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.3)
  const imageContainerRef = useRef(undefined)
  const sliderData = textos[section].slider
  const imgBefore = sliderData.imagenAntes
  const imgAfter = sliderData.imagenDespues

  const slide = (xPosition) => {
    const containerBoundingReact = imageContainerRef.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingReact.left) {
        return 0
      } else if (xPosition > containerBoundingReact.right) {
        return 1
      } else {
        return (xPosition - containerBoundingReact.left) / containerBoundingReact.width
      }
    })
  }

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX)
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUP
  }

  const handleMouseMove = (event) => {
    slide(event.clientX)
  }

  const handleMouseUP = () => {
    window.onmousemove = undefined
    window.onmouseup = undefined
  }

  return (
    <div className='w-[59%] bg-white p-8'>
      <div ref={imageContainerRef} className='relative mx-auto select-none'>
        <CloseBtn handleClose={handleClose} />
        <img
          src={`assets/images/slide/${imgBefore}`}
          alt={`${section} antes de Envac`}
          className='pointer-events-none'
        />
        <img
          src={`assets/images/slide/${imgAfter}`}
          alt={`${section} despues de Envac`}
          className='pointer-events-none absolute inset-0'
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
          }}
        />
        <div style={{ left: `${imageRevealFraq * 100}%` }} className='absolute inset-y-0'>
          <div className='relative h-full'>
            <div className='absolute inset-y-0 -ml-px w-0.5 bg-white' />
            <div
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className='slide-button'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <span className='w-full translate-y-4 text-center text-[1.857rem] font-medium text-gray-900'>
          {textos[section].slider.descripcion}
        </span>
      </div>
    </div>
  )
}

export default Slider
