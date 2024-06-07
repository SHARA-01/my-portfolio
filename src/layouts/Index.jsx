import React , {useState} from 'react'
import { Sidebar, Navbar } from '../components/index'
import { Outlet } from 'react-router-dom'
import Dialog from '../components/Dialog/Dialog';
function Index() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
};

const closeDialog = () => {
    setIsDialogOpen(false);
};

  return (
    <>
      <div className='lg:flex lg:space-x-2 bg-gray-200 lg:px-12 px-3 lg:py-[16rem] py-10 space-y-4'>
        <div  className='lg:w-1/3 lg:max-h-[750px] lg:mx-6 pb-8 text-black border-r-2 rounded-xl bg-white border-gray-100 lg:sticky top-[10rem]'>
          <Sidebar  />
          <button onClick={openDialog}>open</button>
        </div>
        <div className='lg:w-2/3 lg:flex flex-col sm:px-3  lg:min-h-[100vh]'>
          <ul>
            <li className='mx-0 px-10 py-4 lg:min-h-12  justify-end hidden lg:visible'><Navbar /></li>
            <li><Outlet /></li>
            <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
                <h2>Dialog Title</h2>
                <p>This is a simple dialog.</p>
            </Dialog>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Index