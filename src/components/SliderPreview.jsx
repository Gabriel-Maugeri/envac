import SliderViewBtn from './SliderViewBtn'

const SliderPreview = ({ handleSlider, titulo, position, image, className }) => {
  const style = {
    top: `${position.y}rem`,
    left: `${position.x}rem`,
  }

  return (
    <div
      style={style}
      className={`${className} slider-container absolute z-50 flex h-[29.275rem] w-[47.5rem] flex-col items-center justify-between bg-white p-1`}>
      <div className='slider-preview'>
        <SliderViewBtn handleSlider={handleSlider} />
        <span className='inline-block w-full text-center text-[1.625rem] font-bold'>{titulo}</span>
        <img src={`assets/images/slide/${image}`} alt='' />
      </div>
    </div>
  )
}

export default SliderPreview
