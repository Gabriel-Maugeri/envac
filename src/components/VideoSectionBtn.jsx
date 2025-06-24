const VideoSectionBtn = ({ handlePopUp }) => {
  return (
    <button
      className='bg-primary animate-blow-in-modal absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handlePopUp}>
      <img
        src='assets/imagenes/otros/videoSectionBtn.png'
        alt='boton ver mas'
        loading='lazy'
        className='h-auto w-[60%] ml-2'
      />
    </button>
  )
}

export default VideoSectionBtn
