'use client'
import React from 'react'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

interface NavButtonProps {
  scrollToLeft: () => void
  scrollToRight: () => void
}

const NavButton: React.FC<NavButtonProps> = ({
  scrollToLeft,
  scrollToRight
}) => {
  return (
    <div className='flex gap-5'>
      <LeftArrow scroll={scrollToLeft} />
      <RightArrow scroll={scrollToRight} />
    </div>
  )
}

export default NavButton
