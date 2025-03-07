import { Link } from 'react-router-dom'
import Logo from './Logo'
import BackBtn from './backBtn'

const Airport = () => {
  return (
    <section id='airport' className='w-full h-full relative'>
      <img
        className='bg-img -z-10 absolute'
        src='/src/assets/images/fondos/fondo_aeropuerto.jpg'
        alt=''
      />
      <Logo />
      <BackBtn></BackBtn>
    </section>
  )
}

export default Airport
