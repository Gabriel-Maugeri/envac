import { Link } from 'react-router-dom'

const SectionBtn = ({ text, imgName, section }) => {
  return (
    <Link
      to={section}
      className='bg-primary animate-blow-in-modal shadow-primary flex h-52 w-2xs flex-col items-center justify-evenly select-none'>
      <div className='img-container flex size-28'>
        <img
          src={`assets/images/otros/logo_${imgName}.png`}
          alt={`logo ${imgName}`}
          className='self-end'
          draggable='false'
          loading='lazy'
        />
      </div>
      <span className='text-4xl font-normal text-white'>{text}</span>
    </Link>
  )
}

export default SectionBtn
