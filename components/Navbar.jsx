import React from 'react'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  return (
   <>
   <ToastContainer/>
   <header className='w-full md:w-[70%] py-3 px-2 shadow-md mx-auto'>
    <nav className='w-full flex justify-between items-center'>
        <Link href={'/'} className='fond-bold text-2xl'>
            curd app
        </Link>

        <ul className='flex gap-x-4 font-semibold'>
            <li>
                <Link href={"/"} className=''>home</Link>
            </li>
            <li>
            <Link href={"/about"} className=''>about</Link>
            </li>
            
        </ul>

    </nav>

   </header>
   
   </>
  )
}

export default Navbar
