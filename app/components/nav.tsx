import React from 'react'
import Image from 'next/image'

export const Nav = () => {
  return (
    <div className='flex h-[80px] bg-blue-900 items-center justify-around relative'>
        <div>
            <Image src='/logo.png' width={500} height={500} alt='kb' className='h-[90px] w-auto absolute top-10 left-10'></Image>
        </div>
        <div><p className='font-bold text-blue-200 text-lg ml-20 md:hidden flex-wrap'>Tuition Free Education</p></div>
        <div><p className='font-bold text-blue-200 text-lg hidden md:block'>Tuition Free Education Program on Latest Technologies</p></div>

        <div>
          <ul className='md:flex gap-2 md:gap-5 text-blue-50 cursor-pointer hidden'>
            <li>home</li>
            <li>apply</li>
            <li>jobs</li>
            <li>result</li>
          </ul>
        </div>
        <div>
          <select name="cources" id="coursec" className='w-[8rem] text-blue-50 mx-5 cursor-pointer border-none bg-blue-900 outline-none hidden md:block'>
            <option value="" className='text-black font-bold'>Core Courses</option>
            <option value="" className='text-black'>Programing fundamentall</option>
            <option value="" className='text-black'>Web2</option>
            <option value="" className='text-black'>Earn as you Learn</option>
            <hr className='text-black'></hr>
            <option value="" className='text-black font-bold'>Advanced Courses</option>
            <option value="" className='text-black'>Web3 and Metaverse</option>
            <option value="" className='text-black'>Cloud-Native Computing</option>
            <option value="" className='text-black'>Artificial Intelligence</option>
            <option value="" className='text-black'>Ambient Computing and loT</option>
            <option value="" className='text-black'>Genomics and Bionformatics</option>
            <option value="" className='text-black'>Netwoek Programmablilty and Automation</option>
          </select>
        </div>
        <select name="lines" id="" className='appearance-none  bg-blue-900 text-4xl text-white rounded-lg sm:hidden' value='&#8801;' >
        <option>&#8801;</option>

        </select>

    </div>
  )
}
