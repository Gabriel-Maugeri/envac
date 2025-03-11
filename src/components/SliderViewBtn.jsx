const SliderViewBtn = ({ handleSlider }) => {
  return (
    <button
      className='bg-primary absolute top-1/2 left-1/2 z-20 flex size-28 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handleSlider}>
      <img src='assets/images/otros/ver_mas.png' alt='boton ver mas' />
    </button>
  )
}

export default SliderViewBtn
