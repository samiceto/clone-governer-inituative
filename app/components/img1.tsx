import React from 'react'
import Image from 'next/image'

const Img1 = () => {
  return (
    <div className='flex gap-3 my-5 shadow-black'>
        <Image src='/img1.jpg' alt='' width={500} height={500} className='w-[26vw] rounded-md'></Image>
        <Image src='/img2.jpg' alt='' width={500} height={500} className='w-[26vw] rounded-md'></Image>
        <Image src='/img3.jpg' alt='' width={500} height={500} className='w-[26vw] rounded-md'></Image>
    </div>
  )
}

export default Img1