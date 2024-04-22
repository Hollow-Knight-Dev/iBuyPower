import Slider from './Slider'

const BestSellingProduct = () => {
  return (
    <div className='mx-auto mt-10 flex max-w-[1500px] flex-col items-center'>
      <div className='flex flex-col items-center gap-1 p-2'>
        <p className='text-[1.7rem] font-bold leading-9'>
          Best Selling Gaming PC
        </p>
        <p className='text-2xl font-bold'>Prebuilt & Custom</p>
      </div>

      <Slider />
    </div>
  )
}

export default BestSellingProduct
