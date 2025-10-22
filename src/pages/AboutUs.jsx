import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/website_banner_use_this_one.png';

const AboutUs = () => {
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh] flex items-center justify-center">
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

      {/* Company Overview */}
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
              About Expert Data Science & AI, LLC
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Expert Data Science & AI, LLC is a leading consulting firm specializing in advanced analytics, 
                machine learning, and artificial intelligence solutions. We help organizations transform their 
                data into competitive advantages through cutting-edge technology and expert guidance.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our team combines deep technical expertise with real-world business experience, having delivered 
                successful projects for Fortune 10 companies across various industries including retail, 
                automotive, technology, and manufacturing.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We are committed to bridging the gap between complex data science concepts and practical business 
                applications, ensuring our clients achieve measurable results and sustainable competitive advantages 
                in today's data-driven economy.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              className="text-center glass-card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
              }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of data science and AI technologies, continuously exploring new methods and tools to deliver cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center glass-card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
              }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from project delivery to client relationships, ensuring exceptional results every time.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center glass-card p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
              }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as trusted partners, understanding their unique challenges and co-creating solutions that drive real business value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
