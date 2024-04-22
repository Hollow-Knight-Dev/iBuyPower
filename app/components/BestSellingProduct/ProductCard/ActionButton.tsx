'use client'

const ActionButton = () => {
  return (
    <div className=''>
      <button
        className='rounded-full border border-[#fe1b1b] px-3 text-[#fe1b1b]'
        onClick={() => console.log('Click Buy Now')}
      >
        Buy Now
      </button>
    </div>
  )
}

export default ActionButton
