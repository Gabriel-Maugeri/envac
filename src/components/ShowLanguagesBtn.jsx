import { useState, useRef, useEffect } from "react"
import LanguageSwitcher from "./LanguageSwitcher"

const ShowLanguagesBtn = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const hideTimeout = useRef(null)

  const handleMouseEnter = () => {
    // Clear any pending hide timeout
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current)
      hideTimeout.current = null
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    // Set a timeout to hide the switcher after 300ms
    hideTimeout.current = setTimeout(() => {
      setIsHovered(false)
      hideTimeout.current = null
    }, 500)
  }

  const handleClick = () => {
    // setIsClicked(!isClicked)
  }

  const shouldShowSwitcher = isHovered || isClicked

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current)
      }
    }
  }, [])


  return (
    <>
      {/* <div className="absolute top-[6.7%] right-[9.15%] z-20"> */}
      <div className="absolute top-18 right-25 z-100 rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >

        <button
          className='bg-primary animate-blow-in-modal flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
          onClick={handleClick}
          >
          <img
            src='assets/imagenes/otros/idioma.png'
            alt='boton idioma'
            loading='lazy'
            className='h-auto w-[60%]'
          />
        </button>
        {shouldShowSwitcher  && (
          <LanguageSwitcher />
        )}
        
      </div>
    </>
  )
}

export default ShowLanguagesBtn