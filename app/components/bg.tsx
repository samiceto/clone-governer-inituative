import React from 'react'
import Image from 'next/image'
export const Bg = () => {
  return (
    
      <div className='relative'>
        <div className="bg-no-repeat absolute top-0 hidden md:block"><Image src="/house.jpg" alt='' width={500} height={500} className='md:h-[120vh] w-screen opacity-20'></Image></div>
       <div className='relative flex w-[120vw] justify-center sm:justify-between py-10 px-2 sm:p-20 flex-col md:flex-row'> <div><h1 className='text-blue-900 font-extrabold text-[2rem] sm:text-[3rem]'>Governor Sindh</h1>
        <p className='text-blue-900 font-bold text-[1.5rem]'>Kamran Khan Tessori</p>
        <h2 className='text-blue-500 font-extrabold text-[2rem] sm:text-[2.5rem]'>Certified Cloud<br></br>Applied Generative AI<br></br>Engineer (GenEng)</h2>
<h3 className='text-blue-900 font-bold text-[1.5rem]'>Earn up to $5,000 / month</h3>
<h3 className='text-blue-900 font-bold text-[1.5rem]'>Now admissions are open in Hyderabad</h3>


<div className='md:flex sm:px-8 sm:gap-10 py-9'>
    <div>
    <button className='bg-blue-900 text-white font-extrabold mb-7 px-40 md:px-9 py-3 rounded-md'>APLLY NOW</button>
    </div>
    <div className='ml-40'>
        <h1 className='font-extrabold text-blue-900 text-xl px-4'>562,143</h1>
        <p className='text-blue-900 font-thin text-sm'>Accepted Applications</p>
    </div>
</div>
</div> 


<div className='relative'>
<div className="absolute top-0 sm:hidden -left-20"><Image src="/house.jpg" alt='' width={500} height={500} className='h-[80vh] w-fit opacity-20'></Image></div>
<Image src="/cover.png" alt='' width={500} height={500} className='h-[80vh] w-auto pb-7'></Image>

</div> 
        
    </div>
    </div>
  )
}
