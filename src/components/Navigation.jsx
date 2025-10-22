import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/WhatsApp_Image_2025-09-27_at_14.53.14.jpeg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-nav shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20" style={{pointerEvents: 'auto'}}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Expert Data Science & AI Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
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
                className={`px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 font-serif cursor-pointer ${
                  isActive('/') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-cyan-300'
                }`}
                style={{
                  backgroundColor: isActive('/') ? '#158cba' : 'transparent',
                  pointerEvents: 'auto',
                  textShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
                  e.target.style.color = '#00ffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.color = 'white';
                }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 font-serif cursor-pointer ${
                  isActive('/services') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-cyan-300'
                }`}
                style={{
                  backgroundColor: isActive('/services') ? '#158cba' : 'transparent',
                  pointerEvents: 'auto',
                  textShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
                  e.target.style.color = '#00ffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.color = 'white';
                }}
              >
                Services
              </Link>
              <Link
                to="/insights"
                className={`px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 font-serif ${
                  isActive('/insights') 
                    ? 'bg-teal-700 text-white' 
                    : 'text-white hover:text-cyan-300'
                }`}
                style={{
                  backgroundColor: isActive('/insights') ? '#158cba' : 'transparent',
                  textShadow: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
                  e.target.style.color = '#00ffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = 'none';
                  e.target.style.color = 'white';
                }}
              >
                Insights
              </Link>
              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 font-serif ${
                    isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo')
                      ? 'bg-teal-700 text-white' 
                      : 'text-white hover:text-cyan-300'
                  }`}
                  style={{
                    backgroundColor: (isActive('/about') || isActive('/about/about-us') || isActive('/about/founder-ceo')) ? '#158cba' : 'transparent',
                    textShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
                    e.target.style.color = '#00ffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = 'none';
                    e.target.style.color = 'white';
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
                  className={`px-4 py-3 rounded-md text-base font-semibold transition-all duration-300 font-serif ${
                    isActive('/contact') || isActive('/schedule-consultation')
                      ? 'bg-teal-700 text-white' 
                      : 'text-white hover:text-cyan-300'
                  }`}
                  style={{
                    backgroundColor: (isActive('/contact') || isActive('/schedule-consultation')) ? '#158cba' : 'transparent',
                    textShadow: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
                    e.target.style.color = '#00ffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = 'none';
                    e.target.style.color = 'white';
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{backgroundColor: '#158cba', pointerEvents: 'auto'}}>
            <Link
              to="/"
              className="block px-4 py-3 rounded-md text-lg font-semibold text-white font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-4 py-3 rounded-md text-lg font-semibold text-white font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/insights"
              className="block px-4 py-3 rounded-md text-lg font-semibold text-white font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <div className="px-3 py-2">
              <div className="text-lg font-semibold text-white font-serif mb-2">About</div>
              <div className="pl-4 space-y-1">
                <Link
                  to="/about"
                  className="block px-4 py-2 rounded-md text-base font-medium text-blue-100 font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Overview
                </Link>
                <Link
                  to="/about/about-us"
                  className="block px-4 py-2 rounded-md text-base font-medium text-blue-100 font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/about/founder-ceo"
                  className="block px-4 py-2 rounded-md text-base font-medium text-blue-100 font-serif cursor-pointer transition-all duration-300 hover:text-cyan-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Founder & CEO
                </Link>
              </div>
            </div>
            
            {/* Let's Talk Mobile Section */}
            <div className="px-3 py-2">
              <div className="text-lg font-semibold text-white mb-2 font-serif">Let's Talk</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/contact"
                  className="block px-4 py-2 rounded-md text-base text-gray-300 hover:bg-teal-500 hover:text-cyan-300 font-serif cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/schedule-consultation"
                  className="block px-4 py-2 rounded-md text-base text-gray-300 hover:bg-teal-500 hover:text-cyan-300 font-serif cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff,0_0_30px_#00ffff]"
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


