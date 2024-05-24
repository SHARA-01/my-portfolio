import React from 'react'

function ProjectCard({ title,imglink, subtitle,bgColor }) {
    return (
        <div className={`flex flex-col lg:max-w-[350px] min-w-[350px] rounded-md bg-${bgColor}-100 overflow-hidden p-4 m-2`}>
            <img src={imglink} alt="img" className=' rounded-md w-auto h-auto flex hover:scale-[1.02]' />
            <span className='text-gray-800 mt-5'>{subtitle}</span>
            <span className='text-md text-gray-800 font-semibold my-1'>{title}</span>
        </div>
    )
}

export default ProjectCard