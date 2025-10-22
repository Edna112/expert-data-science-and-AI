import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImage from '../assets/website_banner_use_this_one.png';

const About = () => {
  return (
    <div>
      {/* Banner */}
      <section 
        className="relative text-white min-h-[70vh] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-6xl min-h-[70vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 italic">
              Leading the future of data science and AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Navigation */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-8">
              Learn More About Us
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Discover our company story, mission, and meet our leadership team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* About Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/about/about-us" className="glass-card hover:shadow-xl transition-all duration-300 group cursor-pointer block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="bg-gradient-primary h-48 rounded-t-lg flex items-center justify-center">
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
            </motion.div>

            {/* Founder & CEO Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/about/founder-ceo" className="glass-card hover:shadow-xl transition-all duration-300 group cursor-pointer block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="bg-gradient-accent h-48 rounded-t-lg flex items-center justify-center">
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

