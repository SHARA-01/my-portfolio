import React from 'react'
import { Sidebar, Navbar } from '../components/index'
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <>
      <div className='flex space-x-2 bg-gray-200 px-12 py-[16rem]'>
        <div className='w-1/3 max-h-[750px] mx-6 pb-8 text-black border-r-2 rounded-xl bg-white border-gray-100 sticky top-[10rem]'>
          <Sidebar />
        </div>
        <div className='w-2/3 flex flex-col  min-h-[100vh]'>
          <ul>
            <li className='mx-0 px-10 py-4 lg:min-h-12 flex justify-end'><Navbar /></li>
            <li><Outlet /></li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Index