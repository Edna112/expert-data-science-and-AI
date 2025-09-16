import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] shadow-lg" style={{backgroundColor: '#028ab0', pointerEvents: 'auto'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" style={{pointerEvents: 'auto'}}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-serif">
                Expert Data Science & AI, LLC
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif cursor-pointer ${
                  isActive('/') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-white'
                }`}
                style={{
                  backgroundColor: isActive('/') ? '#028ab0' : 'transparent',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/')) {
                    e.target.style.backgroundColor = 'rgba(2, 138, 176, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif cursor-pointer ${
                  isActive('/services') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-white'
                }`}
                style={{
                  backgroundColor: isActive('/services') ? '#028ab0' : 'transparent',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/services')) {
                    e.target.style.backgroundColor = 'rgba(2, 138, 176, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/services')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Services
              </Link>
              <Link
                to="/insights"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif ${
                  isActive('/insights') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-white'
                }`}
                style={{
                  backgroundColor: isActive('/insights') ? '#028ab0' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/insights')) {
                    e.target.style.backgroundColor = 'rgba(2, 138, 176, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/insights')) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Insights
              </Link>
              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif ${
                    isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo')
                      ? 'bg-teal-700 text-white' 
                      : 'text-white hover:text-white'
                  }`}
                  style={{
                    backgroundColor: (isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo')) ? '#028ab0' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo'))) {
                      e.target.style.backgroundColor = 'rgba(2, 138, 176, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo'))) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  About
                  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isAboutOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[9000]">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-serif"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      About Overview
                    </Link>
                    <Link
                      to="/about/about-us"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-serif"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/about/founder-ceo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-serif"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      Founder & CEO
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Let's Talk Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLetsTalkOpen(!isLetsTalkOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif ${
                    isActive('/contact') || isActive('/schedule-consultation')
                      ? 'bg-teal-700 text-white' 
                      : 'text-white hover:text-white'
                  }`}
                  style={{
                    backgroundColor: (isActive('/contact') || isActive('/schedule-consultation')) ? '#028ab0' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(isActive('/contact') || isActive('/schedule-consultation'))) {
                      e.target.style.backgroundColor = 'rgba(2, 138, 176, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(isActive('/contact') || isActive('/schedule-consultation'))) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Let's Talk
                  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLetsTalkOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-serif leading-7"
                      onClick={() => setIsLetsTalkOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/schedule-consultation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-serif leading-7"
                      onClick={() => setIsLetsTalkOpen(false)}
                    >
                      Schedule Your Free Consultation
                    </Link>
                  </div>
                )}
              </div>

              {/* Company Name */}
              {/* <div className="ml-4 text-white text-sm font-medium">
              Expert Data Science & AI, LLC
              </div> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-expert-light-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{pointerEvents: 'auto'}}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{backgroundColor: '#028ab0', pointerEvents: 'auto'}}>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white font-serif cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white font-serif cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/insights"
              className="block px-3 py-2 rounded-md text-base font-medium text-white font-serif cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-white font-serif mb-2">About</div>
              <div className="pl-4 space-y-1">
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 font-serif cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Overview
                </Link>
                <Link
                  to="/about/about-us"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 font-serif cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/about/founder-ceo"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 font-serif cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Founder & CEO
                </Link>
              </div>
            </div>
            
            {/* Let's Talk Mobile Section */}
            <div className="px-3 py-2">
              <div className="text-base font-medium text-white mb-2 font-serif">Let's Talk</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-teal-500 hover:text-white font-serif cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/schedule-consultation"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-teal-500 hover:text-white font-serif cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Your Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="px-3 py-2 text-sm text-gray-300 font-serif">
              Expert Data Science & AI, LLC
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


