import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
  } from 'react-icons/fa';
  import { SiTailwindcss } from 'react-icons/si';
  import React from 'react';
  
  const About = () => {
    return (
      <section className='px-5 py-5 pt-32'>
        <div className='flex items-center justify-center py-20 px-4 md:px-10'>
          <div className='flex flex-col items-center p-4 space-y-6 max-w-3xl'>
            <h2 className='text-gray-500 text-3xl font-bold'>About Me</h2>
  
            <p className="text-lg leading-relaxed text-justify text-gray-700">
              Hello! I'm <span className="font-bold text-black">Anantharaj</span>, a motivated and enthusiastic 
              <span className="font-bold text-black"> Front-End Developer</span> who loves building responsive and user-friendly websites.
              Although I’m a fresher, I’ve gained solid hands-on experience in designing clean, accessible web interfaces using modern technologies.
              <br /><br />
              I have a good understanding of 
              <span className="font-bold text-black"> HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Git, and GitHub.</span> 
              I enjoy learning new technologies and continuously improving my coding and design skills.
              <br /><br />
              My aim is to contribute to real-world projects where I can apply my skills, collaborate with teams, and grow into a professional developer who delivers impactful web experiences.
            </p>
  
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <FaHtml5 className="text-orange-600 text-4xl" title="HTML5" />
              <FaCss3Alt className="text-blue-600 text-4xl" title="CSS3" />
              <FaJs className="text-yellow-400 text-4xl" title="JavaScript" />
              <FaReact className="text-cyan-400 text-4xl" title="React.js" />
              <SiTailwindcss className="text-sky-400 text-4xl" title="Tailwind CSS" />
              <FaBootstrap className="text-purple-600 text-4xl" title="Bootstrap" />
              <FaGitAlt className="text-red-600 text-4xl" title="Git" />
              <FaGithub className="text-gray-800 text-4xl" title="GitHub" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  