const SliderInfoBtn = ({ btnId, position, section, handleInfoBtn }) => {
  const style = {
    top: `${position.y}rem`,
    left: `${position.x}rem`,
  }

  return (
    <>
      <button
        style={style}
        className='bg-primary absolute size-10 animate-pulse cursor-pointer rounded-full'
        onClick={handleInfoBtn}
        id={`slider-${section}-btn-${btnId}`}>
        <img src='' alt='' />
      </button>
    </>
  )
}

export default SliderInfoBtn
