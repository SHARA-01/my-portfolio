import React from 'react'

function Contact() {
    return (
        <div className='bg-white w-full h-auto rounded-xl lg:px-12 px-4 py-[4rem]'>
            <div className='flex items-center space-x-5'>
                <span className='text-4xl font-bold font-roboto text-gray-700' >Contact</span>
                <hr className='h-1 w-[12rem] bg-blue-400 rounded-md' />
            </div>
            <div className='lg:px-12'>
            <div className='mt-[4rem] mb-[2rem]'>
                <span className='text-2xl font-semibold text-gray-500 '>
                    I'm Always Open To Discussing Product <span className='capitalize font-bold' >design work.</span>
                </span>
            </div>
            <form  action="post">
                <label htmlFor="name" className='px-2 flex items-center align-middle'>Name*</label>
                <input name='name' type="text" className='px-2 mb-8 w-full  focus:outline-none border-b-2 border-gray-400 focus:py-1 transition-transform focus:translate-y-2 focus:border-yellow-500 duration-500' required />
                <label htmlFor="email" className='px-2 flex items-center align-middle'>Email*</label>
                <input name='email' type="email" className='px-2 mb-8 w-full  focus:outline-none border-b-2 border-gray-400 focus:py-1 transition-transform focus:translate-y-2 focus:border-sky-500 duration-500' required />
                <label htmlFor="msg" className='px-2 flex items-center align-middle'>Message*</label>
                <textarea name='msg' type="" className='px-2 focus:py-1 mb-8 w-full  border-b-2 rounded-md border-gray-400 outline-none transition-transform focus:translate-y-2 focus:border-purple-500 duration-500' />
                <button className='px-10 py-2 bg-gradient-to-br from-sky-400 to-sky-500 rounded-md text-md text-white transition-transform hover:-translate-y-1' type='submit'>Submit</button>
            </form>
            </div>
           
        </div>
    )
}

export default Contact