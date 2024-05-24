import React from 'react'
import ProjectCard from '../components/ProjectCard'
import image01 from '../assets/img01.webp'
import image02 from '../assets/img02.webp'
import image03 from '../assets/img03.webp'

function Projects() {
    return (
        <div className='bg-white w-full h-auto rounded-xl px-12 py-[4rem]'>
            <div className='flex items-center space-x-5'>
                <span className='text-4xl font-bold font-roboto text-gray-700' >Projects</span>
                <hr className='h-1 w-[12rem] bg-blue-400 rounded-md' />
            </div>
            <div className='p-8 flex '>
                <div style={{ height: 0 }}></div>
                <div className='flex flex-col space-y-4'>
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='sky' imglink={image01} subtitle="Full Stack Development" />
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='red' imglink={image02} subtitle="Full Stack Development" />
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='purple' imglink={image03} subtitle="Full Stack Development" />
                </div>
                <div>
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='green' imglink={image01} subtitle="Full Stack Development" />
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='gray' imglink={image03} subtitle="Full Stack Development" />
                    <ProjectCard title="Alumni Connect Bridge Future" bgColor='red' imglink={image01} subtitle="Full Stack Development" />
                </div>
            </div>
        </div>
    )
}

export default Projects