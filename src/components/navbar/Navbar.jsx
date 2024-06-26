import React,{useState, useEffect} from 'react'
import { FaRegUser, GoProjectRoadmap, IoDocumentTextOutline, MdOutlineContactPage, MdOutlineWorkOutline } from '../iconsIndex'
import { Link, useLocation } from 'react-router-dom'


function Navbar(props) {
    const path = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const PathName = path?.pathname;
        const CurrentTab = PathName === '/' ? "about" : PathName?.substring(1);
        setActiveTab(CurrentTab)
    }, [path])

    console.log()


    return (
        <>
            <nav className='bg-white rounded-xl  lg:max-w-[51%]'>
                <ul className='flex space-x-6 px-3 py-4  text-gray-700'>
                    <Link to='/'>
                        <li className={`${props && props?.size ? "py-2 px-[10px]": " py-3 px-5"}  rounded-xl  bg-gray-100 space-y-2  flex flex-col items-center justify-center ${activeTab === 'about' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`} >
                           {
                            props?.size ?  <FaRegUser size={20} /> :  <FaRegUser size={28} />
                           }
                          {
                            props?.size ? <span className='text-sm font-semibold'>About</span> : <span className='text-md font-semibold'>About</span>
                          }  
                        </li>
                    </Link>
                    <Link to='/resume'>
                        <li className={`${props && props?.size ? "py-2 px-[5px]" : "p-3"}  rounded-xl  bg-gray-100 space-y-2  flex flex-col items-center justify-center ${activeTab === 'resume' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            {/* <IoDocumentTextOutline size={28} /> */}
                            {
                            props?.size ?  <IoDocumentTextOutline size={20} /> :  <IoDocumentTextOutline size={28} />
                           }
                            {
                            props?.size ? <span className='text-sm font-semibold'>Resume</span> : <span className='text-md font-semibold'>Resume</span>
                          } 
                            {/* <span className='text-md font-semibold'>Resume</span> */}
                        </li>
                    </Link>

                    <Link to='/projects'>
                        <li className={`${props && props?.size ? "py-2 px-[5px]" : "p-3"}  rounded-xl  bg-gray-100 space-y-2  flex flex-col items-center justify-center ${activeTab === 'projects' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            {/* <GoProjectRoadmap size={28} /> */}
                            {
                            props?.size ?  <GoProjectRoadmap size={20} /> :  <GoProjectRoadmap size={28} />
                           }
                            {
                            props?.size ? <span className='text-sm font-semibold'>Projects</span> : <span className='text-md font-semibold'>Projects</span>
                          } 
                            {/* <span className='text-md font-semibold'>Projects</span> */}
                        </li>
                    </Link>

                    <Link to='/contact'>
                        <li className={`${props && props?.size ? "py-2 px-[5px]" : "p-3"}  rounded-xl  bg-gray-100 space-y-2  flex flex-col items-center justify-center ${activeTab === 'contact' ? 'bg-gradient-to-tr from-sky-400 to-sky-500 text-white':'' }  transition-colors hover:text-white duration-500 hover:bg-gradient-to-tr from-sky-400 to-sky-500`}>
                            {/* <MdOutlineContactPage size={28} /> */}
                            {
                            props?.size ?  <MdOutlineContactPage size={20} /> :  <MdOutlineContactPage size={28} />
                           }
                            {
                            props?.size ? <span className='text-sm font-semibold'>Contact</span> : <span className='text-md font-semibold'>Contact</span>
                          } 
                            {/* <span className='text-md font-semibold'>Contact</span> */}
                        </li>
                    </Link>

                    {/* <li className='w-[85px] h-[85px] rounded-xl  bg-gray-100 space-y-2  flex flex-col items-center justify-center'>
                        <FaRegUser size={28}/>
                    <span className='text-md font-semibold capitalize'>about</span> 
                    </li> */}
                </ul>
            </nav>

        </>
    )
}

export default Navbar   