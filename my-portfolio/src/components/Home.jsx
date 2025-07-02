import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myImage from '../assets/my-profile-png.jpeg';

const Home = () => {
  return (
    <section className='px-5 py-10'>
      <div className='flex flex-col md:flex-row items-center justify-between py-20 max-w-6xl mx-auto'>
        
        {/* Left side - Content */}
        <div className='flex flex-col items-start space-y-6 md:w-1/2'>
          <h1 className='text-3xl'>
            Hi I'm <span className='text-6xl font-bold text-gray-500 hover:text-gray-400'>Anantharaj</span>
          </h1>
          <h2 className='text-3xl'>I'm a Front End Web Developer</h2>

          <div className='flex space-x-6'>
            <a
              href="https://www.linkedin.com/in/ananth-raj-r-1427a3352/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-500 text-4xl hover:text-gray-700" />
            </a>
            <a
              href="https://github.com/anantharajcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-500 text-4xl hover:text-gray-700" />
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center'>
          <img
            src={myImage}
            alt="Anantharaj"
            className='w-96 h-96 object-contain rounded-full shadow-lg bg-white p-2'

          />
        </div>
      </div>
    </section>
  );
};

export default Home;
