const InfoBtn = ({ handlePopUp, text, position }) => {
  const style = {
    top: `${position.y}rem`,
    left: `${position.x}rem`,
  }

  return (
    <button
      onClick={handlePopUp}
      style={style}
      className={`bg-primary shadow-primary absolute h-[8.5rem] w-[19rem] cursor-pointer text-center text-[1.625rem]/tight font-medium text-white select-none`}>
      {text}
    </button>
  )
}

export default InfoBtn
