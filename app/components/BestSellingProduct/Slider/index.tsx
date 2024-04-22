'use client'
import ProductCard from '../ProductCard'
import { data } from '../utils/data'
import NavButton from './NavButton'
import useSliderScroll from './useSliderScroll'

const Slider = () => {
  const {
    ref,
    onMouseDown,
    onMouseAway,
    onMouseMove,
    clickScrollLeft,
    clickScrollRight
  } = useSliderScroll()

  return (
    <div className='flex w-full flex-col'>
      <div className='mr-4 self-end'>
        <NavButton
          scrollToLeft={clickScrollLeft}
          scrollToRight={clickScrollRight}
        />
      </div>
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseAway}
        onMouseLeave={onMouseAway}
        onMouseMove={onMouseMove}
        className='hide-scrollbar flex w-full overflow-x-auto py-5'
      >
        {data.map((item, index) => {
          return (
            <div key={index} className='h-fit w-fit'>
              <ProductCard data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
