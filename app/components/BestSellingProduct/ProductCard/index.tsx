import LowerPart from './LowerPart'
import UpperPart from './UpperPart'

const ProductCard = () => {
  return (
    <div className='mx-[12.5px] flex h-[652.5px] flex-col rounded-[10px] shadow-[0_-0.5px_8px_0_rgba(0,0,0,0.3)]'>
      <UpperPart />
      <LowerPart />
    </div>
  )
}

export default ProductCard
