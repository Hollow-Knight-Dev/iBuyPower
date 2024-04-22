'use client'
import ProductCard from '../ProductCard'
import NavButton from './NavButton'

const Slider = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='mr-4 self-end'>
        <NavButton />
      </div>
      <div
        onClick={() => alert('click slider')}
        className='hide-scrollbar flex w-full overflow-x-auto py-5'
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Slider
