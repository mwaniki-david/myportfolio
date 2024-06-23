import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-screen  top-0 '>
      <div className='flex  mx-auto px-[120px] md:px-6 lg:px-[80px] mt-1 items-center justify-center'>
        <div className='flex items-center justify-between h-16 gap-[120px] md:gap-[360px] lg:gap-[180px] '>
          <div className='flex items-center px-6 md:px-4'>
            <Link href='/' className='text-[28px] font-bold'>
              DNM
            </Link>
          </div>
          <div className='flex flex-row w-fullbg-purple-600 gap-5 px-12 ml-12 '>
          <div className='hidden lg:block' >
            <div className='ml-4 px-[5px] flex items-center space-x-4'>
            <ul className='flex flex-row text-[15px] font-bold gap-[40px]'>
              <li className='text-white p-2'>
                <Link href='/'>Home</Link>
              </li>
              <li className='p-2'>
              <Link href='/#About'>About</Link>
              </li>
              <li className='p-2 text-white'>
              <Link href='/#Work'>Projects</Link>
              </li>
              <li className='p-2 text-white'>
                <Link href='/#Experience'>Experience</Link>
              </li>
              <li className='p-2 text-white'>
                <Link href='/#Contact'>Contact</Link>
              </li>
            </ul>
            </div>
          </div>
          <div className=' flex items-center  '>
            <div>
              <Link href='/#Work '>
              <button className=' text-[15px] flex items-center bg-purple-600 hover:bg-purple-900  px-5 py-2 border border-white rounded-full'>
              Work
            </button>
              </Link>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
