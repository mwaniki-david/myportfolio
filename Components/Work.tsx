import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Work = () => {
  return (
    <div id='Work' className='w-screen h-auto py-4 px-8 mt-24 md:mt-40 '>
      <div className='flex flex-col'>
        <div className=' flex items-center justify-center font-bold text-[45px] py-1'>
          <h1 className='px-4 py-4 font-bold md:text-[45px] text-[40px] uppercase'>
            Projects.
          </h1>
        </div>
        <div className=' items-center justify-center grid md:grid-flow-col  py-4 px-6  gap-5 md:gap-[120px] '>
          <div className='px-6 py-5  max-width-[250px]  '>
            <div className=' flex items-center justify-center border-white  rounded-lg w-full '>
            <Link href='https://ait-studio.vercel.app'><Image src='/nogame2.png' width={270} height={100} alt='aboutpic2' className='hover:bg-black bg-transparent rounded-lg shadow-lg shadow-white  '/></Link>
            </div>
            <div className='flex  item-center justify-center '>
            <div className='relative -z-10 -top-4 items-center justify-center flex  px-5 py-6 shadow-lg shadow-white border border-white rounded-2xl max-w-[320px] '>
              <div className='flex flex-col font-bold '>
              <h1 className='text-[25px] underline underline-offset-8 '>ATI Studios.</h1>
              <h2 className='py-2'>this is a simple website done on the next.js framework and with the help of some react libraries such as tailwind css and framer motion</h2>
              </div>
            </div>
            </div>
          </div>
          <div className='px-6 py-5  max-width-[250px]  '>
            <div className=' flex items-center justify-center border-white  rounded-lg w-full '>
            <Link href='https://nextjs-ecommerce-0-starting-point-henna.vercel.app/'><Image src='/experience8.png' width={270} height={100} alt='aboutpic2' className='hover:bg-black bg-transparent rounded-lg shadow-lg shadow-white  '/></Link>
            </div>
            <div className='flex  item-center justify-center '>
            <div className='relative -z-10 -top-4 items-center justify-center flex  px-5 py-6 shadow-lg shadow-white border border-white rounded-2xl max-w-[320px] '>
              <div className='flex flex-col font-bold '>
              <h1 className='text-[25px] underline underline-offset-8 '>H4 KICKS.</h1>
              <h2 className='py-2'>this is a eccormerce application built on next.js on the frontend and mungo db on the backend fully funtional.</h2>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work

{/* <h1 className='text-[25px] underline underline-offset-8'>H4 KICKS.</h1>
<h2 className='py-2'>this is a eccormerce application built on next.js on the frontend and mungo db on the backend fully funtional including stripe integration. </h2> */}