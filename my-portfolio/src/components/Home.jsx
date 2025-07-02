import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home =() => {
    return(
        <section className='px-5 py-5 '>
            <div className='flex items-center justify-center py-40 '>
                <div className='flex flex-col items-center p-6 space-y-5 ' >
                <h1 className='text-3xl space-x-4 '>Hi I'm <span className='text-6xl font-bold text-gray-500 hover:text-gray-400' >Anantharaj</span></h1>
                
                <h2 className='text-3xl space-x-4'>i'm Front End Web Developer</h2>
                <div className="flex space-x-6">

                <a
              href="https://www.linkedin.com/in/ananth-raj-r-1427a3352/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-500 text-4xl hover:text-gray-700" />
            </a>
            <a
              href="https://github.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-500 text-4xl hover:text-gray-700" />
            </a>
            </div>
                </div>
            </div>
        </section>
    );
}
export default Home;