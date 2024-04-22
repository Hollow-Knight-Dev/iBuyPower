'use client'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

const NavButton = () => {
  return (
    <div className='flex gap-5'>
      <LeftArrow />
      <RightArrow />
    </div>
  )
}

export default NavButton
