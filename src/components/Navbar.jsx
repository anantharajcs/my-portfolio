import { NavLink, Link } from 'react-router-dom';

const linkCls ='text-lg text-white hover:text-sky-400 hover:underline transition duration-200';

export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-sky-250 shadow-md z-50">      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 space-y-4 md:space-y-0">
        <Link to="/" className="text-5xl font-bold hover:text-sky-700">
          <span className='text-white'>Anan</span><span className='text-sky-400'>tharaj</span>
        </Link>

        <div className="flex items-center space-x-10">
          <NavLink end to="/"        className={linkCls}>Home</NavLink>
          <NavLink     to="about"    className={linkCls}>About</NavLink>
          <NavLink     to="projects" className={linkCls}>Projects</NavLink>
          <NavLink     to="contact"  className={linkCls}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}