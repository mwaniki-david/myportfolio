import Link from 'next/link'
import React from 'react'

const Herosection = () => {
  return (
    <div className='flex w-screen h-screen  md:pt-[120px]  py-3 px-3 lg:px-1 items-center justify-center md:px-6     mt-6 lg:mt-[5px] ' >
      <div className=''>
        <div className='flex flex-col'>
          <div className='items-center flex px-3 '>
            <h1 className=' text-[26px] font-bold md:text-[40px] px-3 md:px-1'>HELLO!!</h1>
          </div>
          <div className='max-w-[500px] md:max-w-[1000px] lg:max-w-[1100px] font-bold text-[40px] md:text-[45px] uppercase px-3 md:px-1'>
            I AM DAVID MWANIKI , A FULL STACK DEVELOPER based in kenya.
          </div>
          <div className='max-w-[500px] md:max-w-[800px] lg:max-w-[800px] px-4 text-[16px]'>
          I’m a full-stack developer specializing in building and occasionally
          designing exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications that are scalable for any size of users.Contact me so we can bring your ideas to life!!
          </div>
          <div className='md:py-2 mt-3 md:mt-1 ml-5 '>
            <Link href='/#Contact'>
            <button className='items-center flex px-6 py-3 text-[16px] font-bold rounded-full border border-white bg-purple-600 hover:bg-purple-900  '>
              CONTACT ME
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
