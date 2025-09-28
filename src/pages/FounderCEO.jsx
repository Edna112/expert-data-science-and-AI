import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile_pic__1_-removebg-preview.png';
import bannerImage from '../assets/website_banner_use_this_one.png';

const FounderCEO = () => {
  return (
    <div>
      {/* Banner */}
      <section 
        className="relative text-white min-h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Founder & CEO
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Meet Dr. Neba Nfonsang
            </p>
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section with Text Wrapping Around Image */}
          <div className="text-black">
            {/* Founder Image - Float Left for Text Wrapping */}
            <div className="float-left mr-10 mb-8">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={profileImage}
                  alt="Dr. Neba Nfonsang - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Founder Information - Text Wraps Around Image */}
            <div className="text-lg leading-relaxed mb-6">
              Dr. Neba Nfonsang's global data science, AI, and analytics leadership expertise is built on a broad and diverse background that spans four distinct phases:
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">Industry Leadership</h3>
                <p className="text-base leading-relaxed">
                  Dr. Nfonsang is the Founder and CEO of Expert Data Science & AI, LLC, and a Principal Data Scientist 
                  with a strong track record of leading numerous end-to-end analytics, data science, machine learning, and AI 
                  projects. He has delivered impactful solutions for major clients including Walmart, Nvidia, Honda, General 
                  Electric, and others. These projects have spanned the full lifecycle—from data ingestion and feature 
                  engineering to model deployment and drift monitoring—giving him deep, hands-on expertise in developing and 
                  operationalizing advanced analytics and AI solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">Academic Excellence</h3>
                <p className="text-base leading-relaxed">
                  In addition to his industry leadership, Dr. Nfonsang has served as a Professor of Applied Data Science and AI 
                  at the University of Denver since 2017. Over the years, he has taught nearly 80 graduate-level classes across 
                  13 different courses, including Python Programming, Business Analytics, Statistics for Data Science, Applied 
                  Machine Learning, Parallel Computing with Spark, and the Data Science Capstone. He is recognized for designing 
                  and delivering hands-on, project-based curricula that mirror real-world challenges, equipping students with the 
                  skills to build scalable, production-grade data science solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">Training and Development</h3>
                <p className="text-base leading-relaxed">
                  Dr. Nfonsang also supported the delivery of a 40-hour, industry-focused AI training program for a major 
                  insurance company, equipping participants with practical skills to apply data science and AI tools to real-world 
                  business challenges. He further developed and led an in-depth training on electricity demand and price forecasting, 
                  which featured over 400 custom-designed slides and comprehensive, hands-on instruction covering all stages of the 
                  workflow—from data ingestion through deployment and monitoring.
                </p>
              </div>
            </div>

            {/* Clear float to prevent layout issues */}
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      {/* Back to About Us Link */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/about" 
            className="btn-secondary"
          >
            Back to About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FounderCEO;
