import React from 'react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Name or Logo */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Anantharaj. All rights reserved.</p>
        
        {/* Right Side - Social Icons */}
        <div className="flex gap-4 text-xl mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/anantharajcs" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300" />
          </a>
          <a href="mailto:anantharaj@gmail.com">
            <SiGmail className="hover:text-red-400" />
          </a>
          <a href="tel:+917092027057">
            <FaPhone className="hover:text-green-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
