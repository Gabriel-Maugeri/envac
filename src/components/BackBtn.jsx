import { Link } from 'react-router-dom'

const BackBtn = ({ prevPage }) => {
  return (
    <Link
      className='bg-primary animate-blow-in-modal absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
      to={prevPage}>
      <img
        src='assets/imagenes/otros/volver.png'
        alt='boton volver atras'
        className='h-auto w-[60%]'
        loading='lazy'
      />
    </Link>
  )
}

export default BackBtn
