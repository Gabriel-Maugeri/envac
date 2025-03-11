import textos from '../../public/textos.json'
import CloseBtn from './CloseBtn'

const InfoPopUp = ({ title, handleClose, section }) => {
  const popUpData = textos[section].popUps.find((item) => item.titulo === title)

  return (
    <section className='absolute top-0 left-0 flex size-full items-center justify-center pt-28'>
      <div className='relative flex h-[40rem] w-[87.5rem] flex-row gap-11 bg-white p-13'>
        <CloseBtn handleClose={handleClose} />

        <img src={`assets/images/${section}/${popUpData.imagen}`} alt='' className='w-1/2' />

        <div className='flex w-1/2 flex-col pr-8'>
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
