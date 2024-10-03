"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const Links = (
    <>
      <li>
        <a href="#home" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Home</a>
      </li>
      <li>
        <a href="#about" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About Me</a>
      </li>
      <li>
        <a href="#projects" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">projects</a>
      </li>
      <li>
        <a href="#services" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Services</a>
      </li>
      <li>
        <a href="#testimonials" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Testimonials</a>
      </li>
      <li>
        <a href="#contact" className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">{Links}</ul>
        </div>
        <div>
          <Image src="/logo.png" alt="Description" width={200} height={70} />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <button onClick={toggleTheme} className="btn text-white">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <a href="https://www.linkedin.com/in/syed-moinuddin106/" className="btn text-white bg-[#FD6F00] hover:bg-[#fd6e00cc]" download>Download CV</a>
      </div>
    </div>
  );
};

export default Nav;
