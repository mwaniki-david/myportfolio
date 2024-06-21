import Link from 'next/link'
import React from 'react'

// import {
//     FaFacebook,
//     FaGithub,
//     FaInstagram,
//     FaTwitter,
//     FaTwitch,
// } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-20 md:mt-2 bg-black text-gray-300   px-[60px] font-bold flex flex-col'>
        <div className=' w-full gap-12 items-center justify-center  mx-auto grid grid-cols-2 md:grid-cols-3 border-t-2  border-white py-8 px-[10px]'>
            <div>
                <h6 className='font-bold uppercase underline pt-2'>Links</h6>
                <ul>
                    <li className='py-1'>Contact</li>
                    <li className='py-1'>Experiences</li>
                    <li className='py-1'>Resume</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase underline pt-2'>Links</h6>
                <ul>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Projects</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase underline pt-2'>Contacts</h6>
                <ul>
                    <li className='py-1'>tel:<span>0794896856</span></li>
                    <li className='py-1'>Davidnguremwaniki@gmail.com</li>
                    <li className='py-1'>@dave</li>
                </ul>
            </div>
        </div>

        <div className='flex  max-w-[1240px] px-2 py-4 mx-auto items-center justify-center flex-row text-center text-white'>
        <div><p className='py-7 px-7'>@2024</p></div>
        <div className='flex items-center px-4'>
            <Link href='/' className='text-[48px] font-bold'>
              DNM
            </Link>
          </div>
        {/* <div className='flex justify-between sm:w-[300px] pt-4 text-2xl px-8'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div> */}
        </div>
    </div>
  )
}

export default Footer