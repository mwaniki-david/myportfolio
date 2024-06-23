import React from 'react'
import Image from 'next/image'
const Experiences = () => {
  return (
    <div id='Experience' className='w-screen h-auto '>
      <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='font-bold text-[40px] md:text-[45px] py-5 left-0 flex mt-10 '>Experience.</h1>
        <div className='flex flex-col md:flex-row gap-5 px-4 py-6'>
          <div className=' py-5 px-3'>
            <h2 className='font-bold text-[15px] py-6 max-w-[450px] md:mt-14 '>
During my time at ALX Africa, I immersed myself in a dynamic learning environment where I gained practical experience in a variety of programming languages, including C, HTML, CSS, and JavaScript. This hands-on exposure allowed me to develop robust skills in web development and software engineering. 
            </h2>
          </div>
          <div className=' py-4 px-5'>
            <div>
              <Image src='/experience1.jpg' alt='aboutpic' height={300} width={350} className=' rounded-md shadow-lg shadow-green-800'/>
            </div>
          </div>
        </div>
        <div className='hidden md:flex flex-col md:flex-row gap-[80px] px-4 py-3 mt-12'>
        <div className=' py-4 px-5'>
            <div>
              <Image src='/experience.jpg' alt='aboutpic' height={300} width={350} className='rounded-md shadow-lg shadow-red-800'/>
            </div>
          </div>
          <div className=' py-14 px-3'>
            <h2 className='font-bold text-[15px] py-6 max-w-[450px] md:mb-6'>At AIT Studios, I had the opportunity to work on real-time projects, contributing to the creation of immersive digital experiences. This experience was invaluable in refining my workflow methodologies, enabling me to streamline processes and deliver high-quality results efficiently.
            </h2>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default Experiences
