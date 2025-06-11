import { useState, useRef } from 'react'
import CloseBtn from './CloseBtn'
import SliderInfoBtn from './SliderInfoBtn'

const Slider = ({ section, handleClose, textos }) => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.3)
  const [sliderText, setSliderText] = useState('')
  const imageContainerRef = useRef(undefined)
  const sliderData = textos[section].slider
  const imgBefore = sliderData.antes.imagen
  const imgAfter = sliderData.despues.imagen
  const [animateOut, setAnimateOut] = useState(false)
  const [activeBtn, setActiveBtn] = useState({ id: '', section: '' })

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

  const handleInfoBtn = (btnId, section, text) => {
    setActiveBtn({ id: btnId, section: section })
    setSliderText(text)
  }

  const onClose = () => {
    setAnimateOut(true)
    setTimeout(() => {
      handleClose()
    }, 500)
  }

  return (
    <section
      className={`relative flex h-full w-full justify-center ${animateOut ? 'animate-blow-out-modal' : 'animate-blow-in-modal'}`}>
      <div className='absolute mt-5 min-h-[76.3%] w-[59%] bg-white p-8'>
        <div ref={imageContainerRef} className='relative mx-auto select-none'>
          <CloseBtn handleClose={onClose} />
          <div
            className='absolute inset-0 z-20'
            style={{
              clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
            }}>
            <img
              src={`assets/imagenes/slide/${imgBefore}`}
              alt={`${section} antes de Envac`}
              className='pointer-events-none'
              loading='lazy'
            />
            {sliderData.antes.botones.map((btn) => (
              <SliderInfoBtn
                key={btn.id}
                position={btn.posicion}
                image={sliderData.antes.imagenBoton}
                activeImage={sliderData.antes.imagenBotonPresionado}
                active={activeBtn.id === btn.id && activeBtn.section === 'before'}
                handleInfoBtn={() => handleInfoBtn(btn.id, 'before', btn.texto)}
              />
            ))}
          </div>
          <div className='inset-0 z-10'>
            {sliderData.despues.botones.map((btn) => (
              <SliderInfoBtn
                key={btn.id}
                position={btn.posicion}
                image={sliderData.despues.imagenBoton}
                activeImage={sliderData.despues.imagenBotonPresionado}
                active={activeBtn.id === btn.id && activeBtn.section === 'after'}
                handleInfoBtn={() => handleInfoBtn(btn.id, 'after', btn.texto)}
              />
            ))}
            <img
              src={`assets/imagenes/slide/${imgAfter}`}
              alt={`${section} despues de Envac`}
              className='pointer-events-none'
              loading='lazy'
            />
          </div>
          <div style={{ left: `${imageRevealFraq * 100}%` }} className='absolute inset-y-0 z-50'>
            <div className='relative h-full'>
              <div className='absolute inset-y-0 -ml-[2px] w-1 bg-white' />
              <div
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className='slide-button'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <span className='w-full translate-y-4 text-center text-[1.4rem] font-light text-gray-900'>
            {sliderText}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Slider
