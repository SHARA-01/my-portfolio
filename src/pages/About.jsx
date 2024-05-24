import React from 'react'
import designSVG from '../assets/design.svg'

function About() {
    return (
        <div className='bg-white w-full h-auto rounded-xl px-12 py-[4rem]'>
            <div className='flex items-center space-x-5'>
                <span className='text-4xl font-bold font-roboto text-gray-700 ' >About</span>
                <hr className='h-1 w-[12rem] bg-blue-400 rounded-md' />
            </div>
            <div>
                <p className='pt-5 text-gray-600 text-[1.1rem]'>
                     I'm Gulab Chand Meena, a Full Stack Developer who loves create Creative Web designs .
                     I enjoy turning complex problems into simple, beautiful and intuitive designs.
                    </p>
                <p className='py-5 text-gray-600 text-[1.1rem]'>
                Explore my portfolio to see what I've been up to. Let's connect and create something awesome together!
                   </p>
            </div>
            <div>
                <span className='text-2xl text-gray-800 font-semibold flex mb-10'>What I Do!</span>
                <div>
                    <ul className='flex flex-wrap space-y-4 items-center justify-around'>
                        <li className='w-[350px] h-[250px] bg-purple-100 rounded-xl flex p-8 align-middle mt-4'>
                            <span className='mx-2'>
                                <img src={designSVG} alt="svg" className='w-[200px]' />
                            </span>
                            <span className='flex flex-col mx-4'>
                                <span className='text-2xl text-gray-600 font-semibold  mb-5' >Title</span>
                                <span className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem, tempora at quia saepe illum pariatur corrupti delectus quo fuga.</span>
                            </span>
                        </li>
                        <li className='w-[350px] h-[250px] bg-sky-100 rounded-xl flex p-8 '>
                            <span className='mx-2'>
                                <img src={designSVG} alt="svg" className='w-[200px]' />
                            </span>
                            <span className='flex flex-col mx-4'>
                                <span className='text-2xl text-gray-600 font-semibold  mb-5' >Title</span>
                                <span className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem, tempora at quia saepe illum pariatur corrupti delectus quo fuga.</span>
                            </span>
                        </li>
                        <li className='w-[350px] h-[250px] bg-sky-100 rounded-xl flex p-8 '>
                            <span className='mx-2'>
                                <img src={designSVG} alt="svg" className='w-[200px] ' />
                            </span>
                            <span className='flex flex-col mx-4'>
                                <span className='text-2xl text-gray-600 font-semibold  mb-5' >Title</span>
                                <span className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem, tempora at quia saepe illum pariatur corrupti delectus quo fuga.</span>
                            </span>
                        </li>
                        <li className='w-[350px] h-[250px] bg-purple-100 rounded-xl flex p-8 '>
                            <span className='mx-2'>
                                <img src={designSVG} alt="svg" className='w-[200px]' />
                            </span>
                            <span className='flex flex-col mx-4'>
                                <span className='text-2xl text-gray-600 font-semibold  mb-5' >Title</span>
                                <span className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem, tempora at quia saepe illum pariatur corrupti delectus quo fuga.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default About