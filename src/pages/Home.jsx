import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_3.png';

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
      > <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8  absolute inset-0 z-20">
          <div className="text-center h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Bridging the gap between data and business value
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
              Accelerating your path to intelligent, automated decision-making
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              Value Proposition
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="bg-white border-2 border-expert-blue rounded-lg p-8">
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>We help organizations transform data into business value through automated end-to-end data science and AI solutions.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>From project ideation and strategy to development and deployment, we offer full-cycle consulting and training services that drive measurable business outcomes.</span>
                </li>
              </ul>
            </div>
            
            {/* Image Placeholder */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-medium">Collaborative Team Image</p>
                <p className="text-sm">Professional team working together</p>
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
              How we Create Impact
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="bg-white border-2 border-expert-blue rounded-lg p-8">
              <p className="text-lg font-semibold text-gray-900 mb-6">At ExpertDS.AI, we help organizations:</p>
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Unlock the value of their data</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Bridge the gap between technical complexity and business impact.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Accelerate your path to intelligent, automated decision-making.</span>
                </li>
              </ul>
            </div>
            
            {/* Image Placeholder */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-medium">Team Collaboration Image</p>
                <p className="text-sm">Professionals working with technology</p>
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
