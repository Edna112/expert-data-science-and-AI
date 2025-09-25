import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/website_banner_use_this_one.png';

const Insights = () => {
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
              Insights & Tutorials
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
              Topical posts on data science, AI, and business intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in data science and AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link to="/insights/future-machine-learning-business" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Machine Learning</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">Data Science</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  The Future of Machine Learning in Business
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how machine learning is transforming business operations and decision-making processes.
                </p>
                <div className="text-sm text-gray-500">March 15, 2024</div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link to="/insights/building-scalable-ai-solutions" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">AI Engineering</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">AI Engineering</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  Building Scalable AI Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn best practices for developing and deploying AI solutions at scale.
                </p>
                <div className="text-sm text-gray-500">March 10, 2024</div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link to="/insights/data-driven-decision-making" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Business Intelligence</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">Business Intelligence</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  Data-Driven Decision Making
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how to leverage data analytics for strategic business decisions.
                </p>
                <div className="text-sm text-gray-500">March 5, 2024</div>
              </div>
            </Link>

            {/* Article 4 */}
            <Link to="/insights/cloud-native-data-solutions" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Cloud Solutions</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">Cloud Computing</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  Cloud-Native Data Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding the benefits and implementation of cloud-based data infrastructure.
                </p>
                <div className="text-sm text-gray-500">February 28, 2024</div>
              </div>
            </Link>

            {/* Article 5 */}
            <Link to="/insights/python-data-science-tutorial" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Python Tutorial</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">Tutorial</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  Getting Started with Python for Data Science
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to Python libraries and tools for data analysis.
                </p>
                <div className="text-sm text-gray-500">February 20, 2024</div>
              </div>
            </Link>

            {/* Article 6 */}
            <Link to="/insights/state-of-ai-2024" className="card hover:shadow-xl transition-all duration-300 group">
              <div className="bg-[#158cba] h-48 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">AI Trends</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#158cba] font-semibold mb-2">Industry Insights</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#158cba] transition-colors">
                  The State of AI in 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Industry trends and predictions for artificial intelligence this year.
                </p>
                <div className="text-sm text-gray-500">February 15, 2024</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Button Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More About Our Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind Expert Data Science & AI, LLC</p>
          </div>
          <Link 
            to="/about" 
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            About Our Team
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;
