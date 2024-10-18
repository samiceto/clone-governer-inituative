import React from 'react'
import Image from 'next/image'

export const Card = () => {
  return (
    <div>
        <div className='my-8'><hr className='font-bold' /><h1 className='text-blue-900 font-extrabold text-3xl'>Core Courses Sequence</h1></div>
        <div className='flex gap-10 flex-wrap'>
        <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img6.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Programing fundamentalls</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img7.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Web2 using next.js</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img8.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Earn as you learn</p>
    </div>
    </div>




    <div className='my-8'><h1 className='text-blue-900 font-extrabold text-3xl'>Core Courses Sequence</h1></div>
        <div className='flex gap-2 flex-wrap'>
        <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img9.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Programing fundamentalls</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img10.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Web2 using next.js</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img11.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Earn as you learn</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img12.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Earn as you learn</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img13.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Earn as you learn</p>
    </div>
    <div className='w-[100vw] sm:w-60 h-full bg-gray-100 rounded-lg shadow-lg shadow-gray-500'>
        <Image src='/img14.jpg' alt='' width={500} height={500} className='w-[100vw] sm:w-60 rounded-t-lg'></Image>
        <p className='font-bold text-gray-500 text-center py-4'>Earn as you learn</p>
    </div>
    </div>
    </div>
  )
}
