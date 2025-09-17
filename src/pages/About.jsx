import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_3.png';

const About = () => {
  return (
    <div>
      {/* Banner */}
      <section 
        className="relative text-white min-h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl min-h-[70vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Leading the future of data science and AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Us Navigation */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Learn More About Us
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our company story, mission, and meet our leadership team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* About Us Card */}
            <Link to="/about/about-us" className="card hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Company</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-expert-blue font-semibold mb-2">About Us</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-expert-blue transition-colors">
                  Our Company Story
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about our mission, values, and commitment to delivering cutting-edge data science and AI solutions.
                </p>
                <div className="text-sm text-gray-500">Company Overview & Values</div>
              </div>
            </Link>

            {/* Founder & CEO Card */}
            <Link to="/about/founder-ceo" className="card hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Leadership</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-expert-blue font-semibold mb-2">Founder & CEO</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-expert-blue transition-colors">
                  Dr. Neba Nfonsang
                </h3>
                <p className="text-gray-600 mb-4">
                  Meet our founder and CEO, a Principal Data Scientist with extensive experience in leading AI and machine learning projects.
                </p>
                <div className="text-sm text-gray-500">Leadership Profile</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

