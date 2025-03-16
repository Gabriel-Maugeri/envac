const LoadingScreen = () => {
  const circles = [30, 40, 50, 60, 70]

  return (
    <section className='flex h-dvh flex-col items-center justify-center'>
      <svg className='flex w-full' xmlns='http://www.w3.org/2000/svg'>
        <g>
          {circles.map((cx, index) => (
            <circle
              key={index}
              cx={`${cx}vw`}
              r='20'
              cy='50%'
              stroke='#fff'
              strokeWidth='0.5'
              fill='var(--color-primary'
              style={{
                opacity: 0,
                filter: 'saturate(2) opacity(0.85)',
                transformOrigin: 'center',
                animationDelay: `${0.15 * index}s`,
              }}
              className='animate-loading'
            />
          ))}
        </g>
      </svg>
      <span className='text-[1.75rem]/tight text-gray-900'>
        Cargando contenido
        <span className='animate-blink blink-1' style={{ opacity: 0 }}>
          .
        </span>
        <span className='animate-blink blink-2' style={{ opacity: 0 }}>
          .
        </span>
        <span className='animate-blink blink-3' style={{ opacity: 0 }}>
          .
        </span>
      </span>
    </section>
  )
}

export default LoadingScreen
