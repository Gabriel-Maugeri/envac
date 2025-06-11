const ViewMoreBtn = ({ handlePopUp }) => {
  return (
    <button
      className='bg-primary animate-blow-in-modal absolute top-[6.7%] right-[4.15%] z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handlePopUp}>
      <img
        src='assets/imagenes/otros/ver_mas.png'
        alt='boton ver mas'
        loading='lazy'
        className='h-auto w-[40%]'
      />
    </button>
  )
}

export default ViewMoreBtn
