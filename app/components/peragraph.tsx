import React from 'react'
import Img1 from './img1'
import Img2 from './img2'
import { Card } from './card'


export const Peragraph = () => {
  return (
    <div className='sm:mx-32 px-2 my-2'>
        <h1 className='text-blue-900 font-extrabold text-2xl my-4 text-center'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        <p>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
        <Img1 />
        <Img2 />
        <Card />
       
    </div>
  )
}
