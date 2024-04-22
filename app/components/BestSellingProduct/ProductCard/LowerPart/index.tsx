import Image from 'next/image'
import { ProductData } from '../../utils/data'
import ActionButton from '../ActionButton'

interface ProductCardProps {
  data: ProductData
}

const LowerPart: React.FC<ProductCardProps> = ({ data }) => {
  const dateFormat = (type: string, date: string): string => {
    const dateObj = new Date(date)

    if (type === 'Prebuilt PC') {
      return dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: '2-digit'
      })
    } else {
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    }
  }

  return (
    <div className='flex h-[176.5px] w-[350px] flex-col rounded-b-[10px] bg-[#f2f6fa] p-5 text-xs text-black'>
      <div className='w-fit rounded-full bg-[#fe1b1b] px-2 py-[3px] text-xs font-extralight text-white'>
        SAVE ${data.discount}
      </div>
      <div className='mt-2 flex h-fit items-end'>
        <div className='text-2xl font-extrabold'>
          ${(data.price - data.discount).toLocaleString()}
        </div>
        <div className='pb-1 pl-2 text-sm text-[#9ca3af] line-through'>
          ${data.price.toLocaleString()}
        </div>
      </div>
      <div className='flex cursor-pointer items-center'>
        <p>
          Starting at{' '}
          <span className='text-[#1694f5]'>
            ${data.affirmMonthlyPayment}/mo
          </span>{' '}
          with
        </p>
        <Image
          src='/images/icon-affirm.svg'
          alt='icon-affirm'
          width={35}
          height={20}
          className='ml-1'
        />
      </div>
      <div className='mt-2 flex h-fit justify-between'>
        <div className='flex flex-col'>
          <p className='mb-[2px] font-extrabold'>Free Shipping</p>
          <p>
            {data.type === 'Prebuilt PC' ? 'Delivery By' : 'Estimate Ship By'}{' '}
            {dateFormat(data.type, data.date)}
          </p>
        </div>
        <ActionButton type={data.type} />
      </div>
    </div>
  )
}

export default LowerPart
