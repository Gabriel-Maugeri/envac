import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link id='logo-envac' className='absolute top-0 left-0 w-[15rem] select-none cursor-pointer z-100' to='/home'>
      <img src='assets/imagenes/otros/logo_envac.png' alt='logo envac' loading='lazy' />
    </Link>
  )
}

export default Logo
