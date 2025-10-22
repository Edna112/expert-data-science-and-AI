import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImage from '../assets/website_banner_use_this_one.png';
import robotImage1 from '../assets/robot-8530775_1280.jpg';
import robotImage2 from '../assets/robot-8452273_1280.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative text-white min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-6xl min-h-[80vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ExpertDS.AI 
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 italic mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Bridging the gap between <br /> data and business value
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-6xl mx-auto section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              Value Proposition
            </h2>
          </motion.div>
          
          {/* Card Layout */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
            }}
          >
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
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We help organizations transform data into business value through automated end-to-end data science and AI solutions.</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>From project ideation and strategy to development and deployment, we offer full-cycle consulting and training services that drive measurable business outcomes.</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="bg-gray-100 flex items-center justify-center p-6">
                <motion.img 
                  src={robotImage1} 
                  alt="Data Science and AI Solutions" 
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we Create Impact Section */}
      <section className="max-w-6xl mx-auto section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-expert-blue mb-4">
              How we Create Impact
            </h2>
          </motion.div>
          
          {/* Card Layout */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
            }}
          >
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
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We help organizations unlock the value of their data and bridge the gap between technical complexity and business impact.</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>We accelerate your path to intelligent, automated decision-making through our comprehensive data science and AI solutions.</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="bg-gray-100 flex items-center justify-center p-6">
                <motion.img 
                  src={robotImage2} 
                  alt="AI Impact and Business Transformation" 
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Data into Business Value?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our data science and AI solutions can drive your business forward.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
