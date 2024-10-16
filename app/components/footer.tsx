import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' h-full min-h-[80vh] bg-gray-200 flex justify-center gap-[8vw] items-center mt-16 flex-col md:flex-row'>
        <div>
             <h1 className='font-bold text-gray-700 my-2'>core Courses</h1>
            <Link href='#' className='font-thin text-gray-700'>Programming Fundamentals</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Web2 Using NextJS</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Earn as You Learn</Link><br></br>
        </div>
        <div>
             <h1 className='font-bold text-gray-700 my-2'>Advanced Courses</h1>
            <Link href='#' className='font-thin text-gray-700'>Web 3 and Metaverse</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Cloud-Native Computing</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Artificial Intelligence (AI) and Deep Learning</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Ambient Computing and IoT</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Genomics and Bioinformatics</Link><br></br>
            <Link href='#' className='font-thin text-gray-700'>Network Programmability and Automation</Link><br></br>
        </div>
        <div>
            <div><h1 className='font-bold text-gray-700 my-2'>Social Links</h1></div>
            <div className='flex my-2'> 
                <Image src='/fb.png' alt='' width={500} height={500} className='w-8 rounded-full'></Image>
                <Image src='/insta.png' alt='' width={500} height={500} className='w-8 rounded-full'></Image>
                <Image src='/twitter.png' alt='' width={500} height={500} className='w-8 rounded-full'></Image>
                <Image src='/youtube.jpg' alt='' width={500} height={500} className='w-8 rounded-full'></Image>
                <Image src='/tiktoke.png' alt='' width={500} height={500} className='w-8 rounded-full'></Image>

            </div>
            <div className='flex gap-2 my-2'>
                <Image src='/email.png' alt='' width={500} height={500} className='w-6'></Image>
                <p className='text-blue-900 underline'>education@governorsindh.com</p>
            </div>
           
        </div>
    </div>
  )
}

export default Footer