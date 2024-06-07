import React , {useEffect, useState} from 'react'
import { Sidebar, Navbar } from '../components/index'
import { Outlet, useLocation } from 'react-router-dom'
import Dialog from '../components/Dialog/Dialog';

function Index() {
  const location = useLocation();
const [isMobile, setIsMobile] = useState('');
const sizeHandler = () => {
  if(window.innerWidth < 750 ){
    setIsMobile(true)
  }else {
    setIsMobile(false)
  }
}

useEffect(()=>{
  window.addEventListener('resize', sizeHandler)
})

console.log(location.pathname)

  return (
    <>
      <div className='lg:flex lg:space-x-2 bg-gray-200 lg:px-12 px-3 lg:py-[16rem] py-10 space-y-4'>
        
         
          {
            isMobile && location.pathname === "/" ? <div  className='lg:w-1/3 lg:max-h-[750px] lg:mx-6 pb-8 text-black border-r-2 rounded-xl bg-white border-gray-100 lg:sticky top-[10rem]'> <Sidebar  />  </div> 
            : !isMobile ? <div  className='lg:w-1/3 lg:max-h-[750px] lg:mx-6 pb-8 text-black border-r-2 rounded-xl bg-white border-gray-100 lg:sticky top-[10rem]'> <Sidebar  />  </div>: ""
          }
          {/* <button onClick={openDialog}>open</button> */}
       
        <div className='lg:w-2/3 flex flex-col sm:px-3  lg:min-h-[100vh]'>
          <ul>
            {
              isMobile ? '' : <li className='py-4 lg:min-h-12 flex justify-end'><Navbar size={isMobile} /></li>
            }
            
            <li><Outlet context={[isMobile]} /></li>
            
            {/* <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
                <h2>Dialog Title</h2>
                <p>This is a simple dialog.</p>
            </Dialog> */}
          </ul>
        </div>
      </div>
      {
              isMobile ? <li className='flex justify-center mt-2 mb-0 sticky bottom-0'><Navbar size={isMobile} /></li> : ""
            }
    </>
  )
}

export default Index