import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/website_banner_use_this_one.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white min-h-screen "
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      > <div className="absolute inset-0  z-10"></div>
        <div className="max-w-6xl h-screen mx-auto px-4 sm:px-6 lg:px-8  absolute inset-0 z-20">
          <div className="text-center h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white italic mt-10">
            ExpertDS.AI 
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
              Bridging the gap between <br /> data and business value
            </p>
            <Link
              to="/services"
              className="btn-primary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-6xl mx-auto section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              Value Proposition
            </h2>
          </div>
          
          {/* Card Layout */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Teal Header Bar */}
            <div className="bg-[#158cba] px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Value Proposition</h3>
            </div>
            
            {/* Card Content - Two Columns */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Text and Icon */}
              <div className="p-6">
                {/* Text Content */}
                <div className="text-gray-700">
                  <ul className="space-y-3 text-base leading-relaxed">
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We help organizations transform data into business value through automated end-to-end data science and AI solutions.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>From project ideation and strategy to development and deployment, we offer full-cycle consulting and training services that drive measurable business outcomes.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className="bg-gray-100 flex items-center justify-center p-6">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Service Image</p>
                  <p className="text-xs">Professional illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we Create Impact Section */}
      <section className="max-w-6xl mx-auto section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              How we Create Impact
            </h2>
          </div>
          
          {/* Card Layout */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Teal Header Bar */}
            <div className="bg-[#158cba] px-6 py-4">
              <h3 className="text-xl font-semibold text-white">How We Create Impact</h3>
            </div>
            
            {/* Card Content - Two Columns */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Text and Icon */}
              <div className="p-6">
                {/* Text Content */}
                <div className="text-gray-700">
                  <ul className="space-y-3 text-base leading-relaxed">
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We help organizations unlock the value of their data and bridge the gap between technical complexity and business impact.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We accelerate your path to intelligent, automated decision-making through our comprehensive data science and AI solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className="bg-gray-100 flex items-center justify-center p-6">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Service Image</p>
                  <p className="text-xs">Professional illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
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
