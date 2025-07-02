import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaBootstrap,FaGitAlt,FaGithub,} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si';
import React from 'react';

const About =()=>{
    return (
        
            <section className='px-5 py-5'>
                <div className='flex items-center justify-center py-40 px-40 '>
                    <div className='flex flex-col items-center p-6 space-y-5'>
                    <h2 className='text-gray-500 text-3xl font-bold'>About Me</h2>
                    <p className=''> Hello I'm <span className='text-gray-700 font-bold'>Anantharaj</span > a fresher <span className='text-gray-700 font-bold'> Front-End Developer</span> I have good knowledge in 
                    <span className='text-gray-700 font-bold'>HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Git, and GitHub
                    </span> I’m passionate about creating responsive websites and constantly working on improving my skills.</p>
                    <div className="flex space-x-6">
                    <FaHtml5 className="text-orange-600 text-5xl" />
                    <FaCss3Alt className="text-blue-600 text-5xl" />
                    <FaJs className="text-yellow-400 text-5xl" />
                    <FaReact className="text-cyan-400 text-5xl" />
                    <SiTailwindcss className="text-sky-400 text-5xl" />
                    <FaBootstrap className="text-purple-600 text-5xl" />
                    <FaGitAlt className="text-red-600 text-5xl" />
                    <FaGithub className="text-gray-800 dark:text-gray-100 text-5xl" />
                    </div>
                    </div>
                </div>
            </section> 
        
    );
};
export default About;