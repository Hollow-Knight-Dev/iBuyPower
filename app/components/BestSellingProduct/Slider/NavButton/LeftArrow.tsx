interface LeftArrowProps {
  scroll: () => void
}

const LeftArrow: React.FC<LeftArrowProps> = ({ scroll }) => {
  return (
    <div
      className='cursor-pointer rounded-full bg-[#dedededd] p-1'
      onClick={scroll}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5 8.25 12l7.5-7.5'
        />
      </svg>
    </div>
  )
}

export default LeftArrow
