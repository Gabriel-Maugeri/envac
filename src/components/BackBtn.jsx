import { Link } from 'react-router-dom'

const BackBtn = ({ handlePopUp }) => {
  return (
    <button
      className='bg-primary absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handlePopUp}>
      <img src='/src/assets/images/otros/volver.png' alt='boton ver mas' />
    </button>
  )
}

export default BackBtn
