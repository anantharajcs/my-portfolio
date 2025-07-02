import React from 'react'
import { Link } from 'react-router-dom';

const Navbar =  () => {

    return(
      <nav className = '"fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50'>
          <div className='max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-4  '>

          <div className='text-5xl text-black font-bold hover:text-gray-500'>
            <Link to ='/'>Anantharaj</Link>
         </div>
         <div className=' flex items-center justify-center space-x-10 py-4 font-bold '>
             <Link to='/' className='text-lg text-black-700 hover:text-gray-500 hover:underline transition duration-200'>Home</Link>
             <Link to='/about' className='text-lg text-black-700 hover:text-gray-500 hover:underline transition duration-200'>About</Link>
             <Link to='/projects' className='text-lg text-black-700 hover:text-gray-500 hover:underline transition duration-200'>Projects</Link>
             <Link to='/contact' className='text-lg text-black-700 hover:text-gray-500 hover:underline transition duration-200'>Contact</Link>
         </div>
         </div>
      </nav>
    );
}

export default Navbar;