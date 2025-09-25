import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/website_banner_use_this_one.png';

const ScheduleConsultation = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
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
              data-url="https://calendly.com/neba-nfonsang-du/20min"
              style={{ minWidth: '320px', height: '700px' }}
            >
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

