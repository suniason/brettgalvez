import React from 'react'
import Image from 'next/image'

interface Props {
  name: string
  image: string
  description: string
  langandtech: string[]
  status: string
  link?: string
}

const Card: React.FC<Props> = (prop: Props) => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[30vh] overflow-hidden p-5 bg-[#454545] rounded-t-2xl'>
        <Image src={prop.image} width={500} height={100} alt='ChatXpert'></Image>
      </div>
      <div className='bg-black rounded-b-2xl'>
        <div className='text-[1.5rem] font-semibold px-3 pt-5'>{prop.name}</div>
        <div className='text-[#0086D5] my-3 mx-5 overflow-clip scrollbar-thin scrollbar-thumb-[#0086D5] scrollbar-thumb-rounded-md'>
          {prop.langandtech?.map((e, i) => (
            <span key={i} className='mx-1'>
              <u>{e}</u>
            </span>
          ))}
        </div>
        <div className='p-1'>
          <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-[#0086D5] scrollbar-thumb-rounded-md h-[20vh] m-5 p-1'>
            {prop.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
