import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myImage from '../assets/my-profile-png.jpeg';

const Home = () => {
  return (
    <section className="px-5 py-16 pt-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-20 gap-10 md:gap-16">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-start space-y-6 md:w-1/2 max-w-md">
          <h1 className="text-3xl font-normal">
            Hi I'm
            <span className="text-6xl font-bold text-gray-500 hover:text-gray-400">
              Anantharaj
            </span>
          </h1>
          <h2 className="text-3xl text-black">I'm a Front End Web Developer</h2>

          <div className="flex space-x-6 pt-2">
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

        {/* Right Side Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={myImage}
            alt="Anantharaj"
            className='w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain rounded-full shadow-lg bg-white p-2'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
