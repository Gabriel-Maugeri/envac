const CloseBtn = ({ handleClose }) => {
  return (
    <button
      className='absolute top-3 right-3 z-100 flex size-[3.2rem] cursor-pointer items-center justify-center rounded-full bg-[#878787] select-none'
      onClick={handleClose}>
      <img
        src='assets/imagenes/otros/cerrar.png'
        alt='boton ver mas'
        className='size-[1.5rem]'
        loading='lazy'
      />
    </button>
  )
}

export default CloseBtn
