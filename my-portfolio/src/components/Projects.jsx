import { FaLinkedin } from 'react-icons/fa';
import React from 'react'

const Projects = () => {
    return(
        <section>
        <div>
            <div>
            <h1 className=' flex items-center justify-center text-gray-500 text-3xl font-bold  py-10 px-4 text-center'>Projects</h1>

            <h2 className='text-gray-500 text-2xl font-bold py-4 px-4'><a href="https://anantharajcs.github.io/e-commerce-website/">E-Commerce-Website</a></h2>
            <p className="py-4 px-4">
  A responsive E-Commerce website built using <span className="font-semibold text-gray-700">React.js, Vite, Tailwind CSS</span>, and <span className="font-bold text-gray-700">React Router DOM</span>. It includes modern UI, product listing, details, and cart functionality. This project highlights my skills in building reusable components, using hooks, and managing SPA routing with a clean, responsive design.
</p>

                <div>
                    <h1  className='text-gray-500 text-2xl font-bold py-4 px-4'>Key Features:</h1>
                    <ul className=" px-6 list-disc space-y-2 " >
                        <li>🛒 Modern and user-friendly UI</li>
                        <li>📱Fully responsive design (mobile to desktop)</li>
                        <li>🔄 React Router integration for smooth navigation</li>
                        <li>🖼️ Product cards with image, title, and price</li>
                        <li><a className href="https://anantharajcs.github.io/e-commerce-website/">🔗 GitHub Pages hosting</a></li>
                    </ul>
                </div>
                <div>
                    <h1  className='text-gray-500 text-2xl font-bold py-4 px-4'>Tech Stack Used:</h1>
                    <ul className=" px-6 list-disc space-y-2 " >
                        <li>React.js</li>
                        <li>Vite</li>
                        <li>Tailwind Css</li>
                        <li>Bootstrap Css</li>
                        <li>React Router DOM</li>
                        <li>Git & GitHup</li>
                    </ul>
                </div>
                <div>
                <h1 className="text-gray-500 text-2xl font-bold py-4 px-6">GitHub Repo & GitHup pages</h1>
  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 ml-6">
    <a href="https://github.com/anantharajcs/e-commerce-website/tree/main/e-commerce-website" target="_blank" rel="noopener noreferrer">
      View Code
    </a>
  </button>
  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 ml-6">
    <a href="https://anantharajcs.github.io/e-commerce-website/" target="_blank" rel="noopener noreferrer">
      View website
    </a>
  </button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Projects;