const LoadingScreen = () => {
  const circles = [30, 40, 50, 60, 70]

  return (
    <section className='flex size-full flex-col items-center justify-center'>
      <svg className='flex w-full' xmlns='http://www.w3.org/2000/svg'>
        <g>
          {circles.map((cx, index) => (
            <circle
              key={index}
              cx={`${cx}%`}
              r='1.2rem'
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
    </section>
  )
}

export default LoadingScreen
