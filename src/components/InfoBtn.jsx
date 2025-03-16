const InfoBtn = ({ handlePopUp, text, position, className }) => {
  const style = {
    top: `${position.y}rem`,
    left: `${position.x}rem`,
  }

  return (
    <button
      onClick={handlePopUp}
      style={style}
      className={`${className} bg-primary shadow-primary absolute h-[8.5rem] w-[19rem] cursor-pointer p-5 text-center text-[1.625rem]/7 font-medium text-white select-none`}>
      {text}
    </button>
  )
}

export default InfoBtn
