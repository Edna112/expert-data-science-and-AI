import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_2.jpeg';

const Home = () => {
  return (
    <div>
      {/* Hero Section - Full Screen */}
      <section
        className="relative text-white h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg" style={{color: '#028ab0'}}>
            Bridging the gap between data and business value
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto font-light text-white drop-shadow-md">
            Accelerating your path to intelligent, automated decision-making
          </p>
          <Link
            to="/services"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              Value Proposition
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Teal Header */}
            <div className="bg-expert-blue text-white p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Value Proposition
              </h2>
            </div>
            
            {/* Content Area */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Text Content */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We help organizations transform data into business value through automated end-to-end data science and AI solutions. From project ideation and strategy to development and deployment, we offer full-cycle consulting and training services that drive measurable business outcomes.
                </p>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Value Proposition Image</p>
                  <p className="text-sm">Professional illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we Create Impact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              How We Create Impact
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Teal Header */}
            <div className="bg-expert-blue text-white p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                How We Create Impact
              </h2>
            </div>
            
            {/* Content Area */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Text Content */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13 10V3L4 14h7v7l9-11h-7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-4">At ExpertDS.AI, we help organizations:</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-expert-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Unlock the value of their data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-expert-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Bridge the gap between technical complexity and business impact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-expert-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Accelerate your path to intelligent, automated decision-making</span>
                  </li>
                </ul>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Impact Creation Image</p>
                  <p className="text-sm">Professional illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data into Business Value?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our data science and AI solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-expert-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/schedule-consultation"
              className="border-2 border-white text-white hover:bg-white hover:text-expert-blue font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
