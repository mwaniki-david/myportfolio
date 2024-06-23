import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id='About' className='w-screen h-screen  '>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col md:flex-row px-4 py-3  mr-[40px] '>
          <div className=' py-4 px-3  '>
            <h1 className='font-bold text-[40px] md:text-[45px] py-5 justify-center items-center flex'>ABOUT ME.</h1>
            <h2 className='font-bold text-[15px] py-6 px-4 max-w-[550px] '> Im a skilled software developer with experience in TypeScript and
             JavaScript, and expertise in frameworks like React, Node.js, and
             Three.js. I'm a quick learner and collaborate closely with clients to
             create efficient, scalable, and user-friendly solutions that solve
             real-world problems. Let's work together to bring your ideas to life!
            </h2>
          </div>
          <div className=' py-4 px-8'>
            <div className=''>
              <Image src='/experience9.png' alt='aboutpic' height={200} width={390} className='rounded-lg shadow-2xl shadow-white'/>
            </div>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default About
