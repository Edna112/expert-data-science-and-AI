import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_3.png';

const ScheduleConsultation = () => {
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
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Book a 30-minute consultation to discuss your data science and AI needs
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Time
            </h2>
            <p className="text-xl text-gray-600">
              Select a time that works best for you. We'll discuss your project and how we can help.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/your-username/consultation"
              style={{ minWidth: '320px', height: '700px' }}
            >
              {/* Calendly widget will be embedded here */}
              <div className="text-center text-gray-500 py-20">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Calendly Integration</h3>
                <p className="text-lg mb-4">
                  Replace this placeholder with your actual Calendly URL
                </p>
                <p className="text-sm text-gray-600">
                  Update line 91 in this file with your Calendly scheduling link
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              During your free consultation, we'll discuss your specific needs and how we can help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Discovery & Assessment
              </h3>
              <p className="text-gray-600">
                We'll learn about your current data challenges, business goals, and technical requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Solution Discussion
              </h3>
              <p className="text-gray-600">
                We'll explore potential data science and AI solutions tailored to your specific needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Next Steps
              </h3>
              <p className="text-gray-600">
                We'll outline a clear path forward and discuss timeline, budget, and implementation approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions Before Scheduling?
          </h2>
          <p className="text-xl mb-8">
            Feel free to reach out with any questions about our services or consultation process.
          </p>
          <a
            href="/contact"
            className="bg-white text-expert-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Next Button Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More of Our Website</h2>
            <p className="text-xl text-gray-600">Discover our services, insights, and learn more about our team</p>
          </div>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Back to Home
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ScheduleConsultation;

