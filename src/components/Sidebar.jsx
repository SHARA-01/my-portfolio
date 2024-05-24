import React from 'react'
import { TbBrandLeetcode, FaLinkedinIn, FiGithub, HiOutlineDevicePhoneMobile, HiOutlineMail, HiOutlineLocationMarker, LuCalendarDays } from './iconsIndex'
import MyImag from '../assets/Myimg.jpg'

function Sidebar() {
  
  return (
    <>
      <div>
        <ul className='flex  flex-col space-y-4'>
          <li className='w-[250px] -mt-[9rem] h-[250px] bg-blue-200 rounded-xl  mx-auto overflow-hidden object-cover' >
            <img src={MyImag} alt="IMG" className=' w-[250px] mt-[rem] h-[300px] object-cover' />
          </li>
          <li className=' px-5 mx-auto' ><span className='text-3xl font-roboto font-semibold text-gray-700 '>Gulab Chand Meena</span></li>
          <li className=' px-5 mx-auto rounded-md  py-2 bg-gray-100' ><span className='font-semibold text-gray-700'>Full Stack Developer</span></li>
          <li className=' px-5 mx-auto' >
            <ul className='flex space-x-4'>
              <li className='bg-gray-100 rounded-md p-3 text-blue-700'>
                <FaLinkedinIn size={20} />
              </li>
              <li className='bg-gray-100 rounded-md p-3 font-semibold '>
                <TbBrandLeetcode size={20} />
              </li>
              <li className='bg-gray-100 rounded-md p-3'>
                <FiGithub size={20} />
              </li>
            </ul>
          </li>
          <li className='w-[85%] mx-auto bg-gray-100 rounded-xl p-7' >
            <ul className='flex flex-col space-y-6'>
              <li className='flex justify-start'>
                <span className='p-2 bg-white rounded-md text-pink-500 shadow-md mx-2'><HiOutlineDevicePhoneMobile size={28} /></span>
                <span className='flex flex-col'>
                  <span>Phone</span>
                  <span>8824562736</span>
                </span>
              </li>
              <li className='flex justify-start'>
                <span className='p-2 bg-white rounded-md text-purple-500 shadow-md mx-2'><HiOutlineMail size={28} /></span>
                <span className='flex flex-col'>
                  <span>Email</span>
                  <span>chndshara@gmail.com</span>
                </span>
              </li>
              <li className='flex justify-start'>
                <span className='p-2 bg-white rounded-md text-blue-800 shadow-md mx-2'><HiOutlineLocationMarker size={28} /></span>
                <span className='flex flex-col'>
                  <span>Location</span>
                  <span>Jaipur, Rajasthan</span>
                </span>
              </li>
              <li className='flex justify-start'>
                <span className='p-2 bg-white rounded-md text-yellow-500 shadow-md mx-2'><LuCalendarDays size={28} /></span>
                <span className='flex flex-col'>
                  <span>Birthday</span>
                  <span>05/05/2001</span>
                </span>
              </li>
            </ul>
          </li>
          <button className='w-auto mx-20 my-10 px-5 py-3 bg-gradient-to-tr from-sky-400 to-sky-600 rounded-md shadow-md text-white font-semibold text-xl transition-transform hover:scale-[1.02] duration-300'>Download CV</button>
        </ul>
      </div>
    </>
  )
}

export default Sidebar