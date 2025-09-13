import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-expert-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold font-serif leading-7">
                Expert Data Science & AI, LLC
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif leading-7 ${
                  isActive('/') 
                    ? 'bg-expert-light-blue text-white' 
                    : 'text-white hover:bg-expert-light-blue hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif leading-7 ${
                  isActive('/services') 
                    ? 'bg-expert-light-blue text-white' 
                    : 'text-white hover:bg-expert-light-blue hover:text-white'
                }`}
              >
                Services
              </Link>
              <Link
                to="/insights"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif leading-7 ${
                  isActive('/insights') 
                    ? 'bg-expert-light-blue text-white' 
                    : 'text-white hover:bg-expert-light-blue hover:text-white'
                }`}
              >
                Insights
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif leading-7 ${
                  isActive('/about') 
                    ? 'bg-expert-light-blue text-white' 
                    : 'text-white hover:bg-expert-light-blue hover:text-white'
                }`}
              >
                About
              </Link>
              
              {/* Let's Talk Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLetsTalkOpen(!isLetsTalkOpen)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-serif leading-7 ${
                    isActive('/contact') || isActive('/schedule-consultation')
                      ? 'bg-expert-light-blue text-white' 
                      : 'text-white hover:bg-expert-light-blue hover:text-white'
                  }`}
                >
                  Let's Talk
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-expert-dark-blue">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-expert-light-blue font-serif leading-7"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-expert-light-blue font-serif leading-7"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/insights"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-expert-light-blue font-serif leading-7"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-expert-light-blue font-serif leading-7"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Let's Talk Mobile Section */}
            <div className="px-3 py-2">
              <div className="text-base font-medium text-white mb-2 font-serif leading-7">Let's Talk</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-expert-light-blue hover:text-white font-serif leading-7"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/schedule-consultation"
                  className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-expert-light-blue hover:text-white font-serif leading-7"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Your Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="px-3 py-2 text-sm text-gray-300 font-serif leading-7">
              Expert Data Science & AI, LLC
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


