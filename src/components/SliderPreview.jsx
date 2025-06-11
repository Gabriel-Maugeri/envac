const SliderPreview = ({ handleSlider, titulo, position, image, className }) => {
  const style = {
    top: `${position.y}%`,
    right: `${position.x}%`,
  }

  return (
    <div
      style={style}
      className={`${className} slider-container absolute z-50 flex h-[29.275rem] w-[47.5rem] flex-col items-center justify-between bg-white p-1`}>
      <button className='slider-preview cursor-pointer' onClick={handleSlider}>
        <span className='inline-block w-full pt-0.5 pb-1 text-center text-[1.25rem] font-light text-gray-950'>
          {titulo}
        </span>
        <img src={`assets/imagenes/slide/${image}`} alt='' loading='lazy' />
      </button>
    </div>
  )
}

export default SliderPreview
