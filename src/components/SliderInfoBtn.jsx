const SliderInfoBtn = ({ position, handleInfoBtn, image, activeImage, active }) => {
  const style = {
    top: `${position.y}%`,
    left: `${position.x}%`,
  }

  return (
    <>
      <button style={style} className='absolute size-14 cursor-pointer' onClick={handleInfoBtn}>
        <img
          src={`assets/imagenes/otros/${image}`}
          style={{ display: active ? 'none' : 'inline-block' }}
          loading='lazy'
        />
        <img
          src={`assets/imagenes/otros/${activeImage}`}
          style={{ display: active ? 'inline-block' : 'none' }}
          loading='lazy'
        />
      </button>
    </>
  )
}

export default SliderInfoBtn
