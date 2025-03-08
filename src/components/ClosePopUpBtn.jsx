const ClosePopUpBtn = ({ handlePopUp }) => {
  return (
    <button
      className='absolute top-3 right-3 z-20 flex size-[4.4rem] cursor-pointer items-center justify-center rounded-full bg-[#878787] select-none'
      onClick={handlePopUp}>
      <img src='assets/images/otros/cerrar.png' alt='boton ver mas' />
    </button>
  )
}

export default ClosePopUpBtn
