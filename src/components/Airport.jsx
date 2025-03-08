import { Link } from 'react-router-dom'
import Logo from './Logo'
import BackBtn from './backBtn'

const Airport = () => {
  return (
    <section id='airport' className='relative h-full w-full'>
      <img
        className='bg-img absolute -z-10'
        src='assets/images/fondos/fondo_aeropuerto.jpg'
        alt=''
      />
      <Logo />
      <BackBtn></BackBtn>
    </section>
  )
}

export default Airport
