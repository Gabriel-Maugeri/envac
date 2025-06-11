const InfoBtn = ({ handlePopUp, text, position, className }) => {
  const style = {
    top: `${position.y}%`,
    left: `${position.x}%`,
    animationDelay: '0s, 0.5s',
  }

  return (
    <>
      <button
        onClick={handlePopUp}
        style={style}
        className={`${className} bg-primary popUp-btn shadow-primary animate-info-btn absolute h-[7rem] w-[15.5rem] cursor-pointer px-5 text-center text-[1rem]/7 font-light text-white select-none`}>
        {text}
      </button>
      {/* <button
      style={style}
      className='bg-primary popUp-btn-movil animate-blow-in-modal hidden absolute z-20 size-20 cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handlePopUp}>
        <img
          src='assets/imagenes/otros/ver_mas.png'
          alt='boton ver mas'
          loading='lazy'
          className='h-auto w-[50%]'
        />
        <span className='text-[1.2rem]/7 font-light text-black absolute w-[300%] top-[120%]'>{text}</span>
      </button> */}
    </>
  )
}

export default InfoBtn
