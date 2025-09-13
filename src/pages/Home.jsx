import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_3.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging the gap between data and business value
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
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
          
          {/* Value Proposition Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Blue header */}
            <div className="bg-expert-blue px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Value Proposition
              </h3>
            </div>
            
            {/* Content area */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Text content */}
              <div className="p-4 md:p-8">
                <div className="text-3xl md:text-4xl mb-4">💡</div>
                <ul className="space-y-3 md:space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">We help organizations transform data into business value through automated end-to-end data science and AI solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">From project ideation and strategy to development and deployment, we offer full-cycle consulting and training services that drive measurable business outcomes.</span>
                  </li>
                </ul>
              </div>
              
              {/* Image placeholder */}
              <div className="bg-gray-200 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Value Proposition Image</p>
                  <p className="text-xs">Professional illustration</p>
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
              How we Create Impact
            </h2>
          </div>
          
          {/* Impact Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Blue header */}
            <div className="bg-expert-blue px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                How we Create Impact
              </h3>
            </div>
            
            {/* Content area */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Text content */}
              <div className="p-4 md:p-8">
                <div className="text-3xl md:text-4xl mb-4">📊</div>
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">At ExpertDS.AI, we help organizations:</p>
                <ul className="space-y-3 md:space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Unlock the value of their data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Bridge the gap between technical complexity and business impact.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-expert-blue rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Accelerate your path to intelligent, automated decision-making.</span>
                  </li>
                </ul>
              </div>
              
              {/* Image placeholder */}
              <div className="bg-gray-200 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Impact Image</p>
                  <p className="text-xs">Professional illustration</p>
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

      {/* Next Button Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Our Services?</h2>
            <p className="text-xl text-gray-600">Discover how we can help accelerate your data science journey</p>
          </div>
          <Link 
            to="/services" 
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            View Our Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
