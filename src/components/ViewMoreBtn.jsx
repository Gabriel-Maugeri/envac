import { useState } from 'react'

const ViewMoreBtn = ({ prevPag, handlePopUp }) => {
  return (
    <button
      to={`/${prevPag}`}
      className='bg-primary absolute top-18 right-20 z-20 flex size-20 cursor-pointer items-center justify-center rounded-full select-none'
      onClick={handlePopUp}>
      <img src='assets/images/otros/ver_mas.png' alt='boton ver mas' />
    </button>
  )
}

export default ViewMoreBtn
