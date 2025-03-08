import textos from '../../public/textos.json'
import ClosePopUpBtn from './ClosePopUpBtn'

const InfoPopUp = ({ title, handlePopUp }) => {
  const popUpData = textos.aeropuertos.popUps.find((item) => item.titulo === title)

  return (
    <section className='flex size-full items-center justify-center'>
      <div className='relative mb-27 flex h-[74%] w-[70%] flex-row gap-11 bg-white p-13'>
        <ClosePopUpBtn handlePopUp={handlePopUp} />

        <img src={`assets/images/aeropuertos/${popUpData.imagen}`} alt='' className='w-1/2' />

        <div className='flex w-1/2 flex-col'>
          <h2 className='-mt-1 mb-5 text-[1.75rem] font-bold'>{popUpData.titulo}</h2>
          <ul className='list-disc pl-4 text-[1rem]'>
            {popUpData.texto.map((texto, index) => (
              <li key={index} className='mb-0.25'>
                <span className='text-[1.475rem]/tight'>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InfoPopUp
