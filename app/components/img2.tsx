import React from 'react'
import Image from 'next/image'

const Img2 = () => {
  return (
    <div className='flex gap-3 flex-wrap my-5 shadow-black'> 
        <Image src='/img4.jpg' alt='' width={500} height={500} className='w-[35vw] h-[60vh] m-auto rounded-md'></Image>
        <Image src='/img5.jpg' alt='' width={500} height={500} className='w-[35vw] h-[60vh] m-auto rounded-md'></Image>
        <div className='flex gap-2 justify-center w-[100vw]'>
        <span><div className='bg-gray-300 h-1 rounded-lg w-[80px]'></div></span>
        <span><div className='bg-gray-300 h-1 rounded-lg w-[80px]'></div></span>
        <span><div className='bg-gray-300 h-1 rounded-lg w-[80px]'></div></span>
        <span><div className='bg-gray-900 h-1 rounded-lg w-[80px]'></div></span>
        </div>
    </div>
  )
}

export default Img2