import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile_pic__1_-removebg-preview.png';
import bannerImage from '../assets/sky_rocks_banner_2.jpeg';

const FounderCEO = () => {
  return (
    <div>
      {/* Banner */}
      <section 
        className="relative text-white"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={profileImage}
                    alt="Dr. Neba Nfonsang - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dr. Neba Nfonsang
              </h2>
              <p className="text-xl text-expert-blue font-semibold mb-2">
                Founder & CEO
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Expert Data Science & AI, LLC
              </p>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Dr. Neba Nfonsang is the Founder and CEO of Expert Data Science & AI, LLC, and a Principal Data Scientist 
                  with a strong track record of leading numerous end-to-end analytics, data science, machine learning, and AI 
                  projects. He has delivered impactful solutions for major clients including Walmart, Nvidia, Honda, General 
                  Electric, and others. These projects have spanned the full lifecycle—from data ingestion and feature 
                  engineering to model deployment and drift monitoring—giving him deep, hands-on expertise in developing and 
                  operationalizing advanced analytics and AI solutions.
                </p>
                
                <p>
                  In addition to his industry leadership, Dr. Nfonsang has served as a Professor of Applied Data Science and AI 
                  at the University of Denver since 2017. Over the years, he has taught nearly 80 graduate-level classes across 
                  13 different courses, including Python Programming, Business Analytics, Statistics for Data Science, Applied 
                  Machine Learning, Parallel Computing with Spark, and the Data Science Capstone. He is recognized for designing 
                  and delivering hands-on, project-based curricula that mirror real-world challenges, equipping students with the 
                  skills to build scalable, production-grade data science solutions.
                </p>
                
                <p>
                  Dr. Nfonsang also supported the delivery of a 40-hour, industry-focused AI training program for a major 
                  insurance company, equipping participants with practical skills to apply data science and AI tools to real-world 
                  business challenges. He further developed and led an in-depth training on electricity demand and price forecasting, 
                  which featured over 400 custom-designed slides and comprehensive, hands-on instruction covering all stages of the 
                  workflow—from data ingestion through deployment and monitoring.
                </p>
                
                <p>
                  Beyond education and training, Dr. Nfonsang continues to lead and contribute to data science and AI projects 
                  across a wide range of industries. He applies cutting-edge techniques to solve complex business challenges, 
                  helping organizations unlock value from their data through innovative, AI-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to About Us Link */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
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
