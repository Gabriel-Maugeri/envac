const SliderInfoBtn = ({ position, handleInfoBtn, image, activeImage, active }) => {
  const style = {
    top: `${position.y}rem`,
    left: `${position.x}rem`,
  }

  return (
    <>
      <button style={style} className='absolute size-14 cursor-pointer' onClick={handleInfoBtn}>
        <img
          src={`assets/images/otros/${image}`}
          style={{ display: active ? 'none' : 'inline-block' }}
          loading='lazy'
        />
        <img
          src={`assets/images/otros/${activeImage}`}
          style={{ display: active ? 'inline-block' : 'none' }}
          loading='lazy'
        />
      </button>
    </>
  )
}

export default SliderInfoBtn
