import React from 'react'
import { FaGraduationCap, MdOutlineWorkOutline } from '../components/iconsIndex'

function Resume() {
    return (
        <div className='bg-white w-full h-auto rounded-xl px-12 py-[4rem]'>
            <div className='flex items-center space-x-5'>
                <span className='text-4xl font-bold font-roboto text-gray-700 ' >Resume</span>
                <hr className='h-1 w-[12rem] bg-blue-400 rounded-md' />
            </div>
            <ul className='flex flex-col my-5 py-5 space-y-5'>
                <li>
                    <ul className='flex'>
                        <li className='w-1/2 flex flex-col'>
                            <ul className='flex flex-col space-y-5'>
                                <li className='flex items-center  my-2'>
                                    <span className=' text-purple-500'>
                                        <FaGraduationCap size={28} />
                                    </span>
                                    <span className='text-2xl text-gray-700 font-roboto font-bold mx-2'>
                                        Education
                                    </span>
                                </li>
                                <li className='lg:min-w-[350px] px-8 py-8 rounded-xl bg-red-100 flex flex-col space-y-1'>
                                    <span className='text-md text-gray-700'>
                                        2018
                                    </span>
                                    <span className='text-xl text-gray-800'>
                                        Intermedite In Science-Math
                                    </span>
                                    <span className='text-md text-gray-700'>
                                        Rajasthan Board of Secondary Education
                                    </span>
                                </li>
                                <li className='lg:min-w-[350px] px-8 py-8 rounded-xl bg-sky-100 flex flex-col space-y-1'>
                                    <span className='text-md text-gray-700'>
                                        2020-2024
                                    </span>
                                    <span className='text-xl text-gray-800'>
                                        B.Tech In Computer Science
                                    </span>
                                    <span className='text-md text-gray-700'>
                                        Rajasthan Technical University
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li className='w-1/2 mx-6 flex flex-col'>
                            <ul className='flex flex-col space-y-5'>
                                <li className='flex items-center  my-2'>
                                    <span className=' text-purple-500'>
                                        <MdOutlineWorkOutline size={28} />
                                    </span>
                                    <span className='text-2xl text-gray-700 font-roboto font-bold mx-2'>
                                        Experience
                                    </span>
                                </li>
                                <li className='lg:min-w-[350px] px-8 py-8 rounded-xl bg-sky-100 flex flex-col space-y-1'>
                                    <span className='text-md text-gray-700'>
                                        Jan/2024 - Feb/20204
                                    </span>
                                    <span className='text-xl text-gray-800'>
                                        Full Stack Developer
                                    </span>
                                    <span className='text-md text-gray-700'>
                                        Navodita Infotech
                                    </span>
                                </li>
                                <li className='lg:min-w-[350px] px-8 py-8 rounded-xl bg-red-100 flex flex-col space-y-1'>
                                    <span className='text-md text-gray-700'>
                                        May/2024 - Present
                                    </span>
                                    <span className='text-xl text-gray-800'>
                                        Software Intern
                                    </span>
                                    <span className='text-md text-gray-700'>
                                        Mobzway
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='flex'>
                        <li className='w-1/2 flex flex-col my-2'>
                            <span className='flex text-left text-2xl text-gray-700 font-roboto font-bold'>
                                Skills
                            </span>
                            <ul className='flex flex-wrap space-x-2  space-y-5 items-center'>
                                <div style={{ height: 0 }}></div>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    ReactJs
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    Nodejs
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    Tailwind CSS
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    Expressjs
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    intermediate JavaScript
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    MongoDB Database
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    intermediate C++
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    HTML
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    CSS
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    REST API
                                </li>
                            </ul>
                        </li>
                        <li className='w-1/2 flex flex-col my-2'>
                            <span className='flex text-left text-2xl text-gray-700 font-roboto font-bold'>
                                Knowledges
                            </span>
                            <ul className='flex flex-wrap space-x-2 space-y-5 items-center'>
                                <div style={{ height: 0 }}></div>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    GitHub
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    VsCode
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    Sublime text
                                </li>
                                <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    Basic DSA
                                </li>
                                {/* <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>
                                    
                                </li> */}
                                {/* <li className='px-5 py-1 bg-gray-200 rounded-md text-gray-700'>

                                </li> */}
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Resume