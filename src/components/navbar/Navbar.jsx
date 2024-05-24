import React,{useState, useEffect} from 'react'
import { FaRegUser, GoProjectRoadmap, IoDocumentTextOutline, MdOutlineContactPage, MdOutlineWorkOutline } from '../iconsIndex'
import { Link, useLocation } from 'react-router-dom'


function Navbar() {
    const path = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const PathName = path?.pathname;
        const CurrentTab = PathName === '/' ? "about" : PathName?.substring(1);
        setActiveTab(CurrentTab)
    }, [path])



    return (
        <>
            <nav className='bg-white rounded-xl'>
                <ul className='flex space-x-6 px-5 py-4  text-gray-700'>
                    <Link to='/'>
                        <li className={`w-[85px] rounded-xl  bg-gray-100 space-y-2 h-[85px] flex flex-col items-center justify-center ${activeTab === 'about' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`} >
                            <FaRegUser size={28} />
                            <span className='text-md font-semibold'>About</span>
                        </li>
                    </Link>
                    <Link to='/resume'>
                        <li className={`w-[85px] rounded-xl  bg-gray-100 space-y-2 h-[85px] flex flex-col items-center justify-center ${activeTab === 'resume' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            <IoDocumentTextOutline size={28} />
                            <span className='text-md font-semibold'>Resume</span>
                        </li>
                    </Link>

                    <Link to='/projects'>
                        <li className={`w-[85px] rounded-xl  bg-gray-100 space-y-2 h-[85px] flex flex-col items-center justify-center ${activeTab === 'projects' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            <GoProjectRoadmap size={28} />
                            <span className='text-md font-semibold'>Projects</span>
                        </li>
                    </Link>

                    <Link to='/contact'>
                        <li className={`w-[85px] rounded-xl  bg-gray-100 space-y-2 h-[85px] flex flex-col items-center justify-center ${activeTab === 'contact' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            <MdOutlineContactPage size={28} />
                            <span className='text-md font-semibold'>Contact</span>
                        </li>
                    </Link>

                    {/* <li className='w-[85px] rounded-xl  bg-gray-100 space-y-2 h-[85px] flex flex-col items-center justify-center'>
                        <FaRegUser size={28}/>
                    <span className='text-md font-semibold capitalize'>about</span> 
                    </li> */}
                </ul>
            </nav>

        </>
    )
}

export default Navbar   