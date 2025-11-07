import React from 'react'
import { FaLinkedin, FaGithub, FaPhone} from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    return(
        <section className='px-5 py-5 '>
            <div className='flex items-center justify-center py-40 '>
                <div className='flex flex-col items-center p-6 space-y-5 ' >
                <h1 className='flex items-center justify-center text-gray-500 text-3xl font-bold'>Contact</h1>
                
                <h2 className='text-xl space-x-4'>Hi its My Contact</h2>
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
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="text-gray-500 text-4xl hover:text-gray-700" />
            </a>
            <a href="tel: 8870925421 " className="text-green-600 hover:text-green-800 transition duration-300">
         <FaPhone />
          </a>
            </div>
            <h1>Phone Number: 8870925421</h1>
                </div>
            </div>
        </section>
    );
}
export default Contact;
