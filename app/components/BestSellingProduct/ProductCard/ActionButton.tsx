'use client'

interface ActionButtonProps {
  type: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ type }) => {
  return (
    <div className='h-full'>
      <button
        className='h-full rounded-full border border-[#fe1b1b] px-5 text-sm text-[#fe1b1b] transition duration-200 ease-in-out hover:bg-[#fe1b1b] hover:text-white'
        onClick={() => console.log('Click Buy Now')}
      >
        {type === 'Prebuilt PC' ? 'Buy Now' : 'Customize'}
      </button>
    </div>
  )
}

export default ActionButton
