import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-[60px] bg-neutral-900/60 shadow-lg backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-lg font-sans leading-none">
          <span className="text-neutral-100 text-2xl">A</span>
          <span className="text-neutral-100 text-lg">ROGYA </span>
          <span className="text-[#A82532] text-2xl">N</span>
          <span className="text-[#A82532] text-lg">ET</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about-us" className="text-white text-sm hover:text-primary-500 transition-colors whitespace-nowrap">
            About Us
          </a>
          <a href="#about-project" className="text-white text-sm hover:text-primary-500 transition-colors whitespace-nowrap">
            About The Project
          </a>
          <a href="#project-report" className="text-white text-sm hover:text-primary-500 transition-colors whitespace-nowrap">
            Project Report
          </a>
          <a href="#our-research" className="text-white text-sm hover:text-primary-500 transition-colors whitespace-nowrap">
            Our Research
          </a>
        </div>

        {/* Login Button */}
        <button className="flex items-center justify-center gap-1 px-4 h-[37px] rounded-full bg-cyan-50/95 backdrop-blur-lg hover:bg-cyan-100 transition-colors">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13.5" cy="13.5" r="13.5" fill="#000" opacity="0.1"/>
            <circle cx="13.5" cy="10" r="4" fill="#000" opacity="0.6"/>
            <path d="M5 22c0-4.5 3.5-8 8.5-8s8.5 3.5 8.5 8" fill="#000" opacity="0.6"/>
          </svg>
          <span className="text-black font-medium text-sm">LOGIN</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
