import Image from 'next/image'
import { ProductData } from '../../utils/data'

interface ProductCardProps {
  data: ProductData
}

const UpperPart: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className='flex h-[476px] w-[350px] flex-col justify-between rounded-t-[10px] p-5'>
      <div>
        <div className='w-fit rounded-full border border-[#929292] px-2 py-[2px] text-[10px] font-bold text-[#929292]'>
          {data.type}
        </div>
        <a href={`/store/${data.name}`} className='flex justify-center'>
          <Image
            src={`${data.image}`}
            alt={`${data.name}`}
            width={200}
            height={200}
            className='self-center'
          />
        </a>
        <a
          className='text-lg font-bold hover:text-[#fe1b1b]'
          href={`/store/${data.name}`}
        >
          {data.name}
        </a>
      </div>
      <div className='mt-6 flex flex-col gap-1 text-[15px]'>
        <p>{data.window}</p>
        <p>{data.cpu}</p>
        <p>{data.gpu}</p>
        <p>{data.ssd}</p>
        <p>{data.ram}</p>
      </div>
    </div>
  )
}

export default UpperPart
