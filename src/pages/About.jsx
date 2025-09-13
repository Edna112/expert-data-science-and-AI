import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile_pic__1_-removebg-preview.png';
import bannerImage from '../assets/sky_rocks_banner_3.png';

const About = () => {
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
        <div className="absolute inset-0 bg-expert-blue bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Leading the future of data science and AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Expert Data Science & AI, LLC
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Expert Data Science & AI, LLC is a leading consulting firm specializing in advanced analytics, 
                machine learning, and artificial intelligence solutions. We help organizations transform their 
                data into competitive advantages through cutting-edge technology and expert guidance.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our team combines deep technical expertise with real-world business experience, having delivered 
                successful projects for Fortune 500 companies across various industries including retail, 
                automotive, technology, and manufacturing.
              </p>
              <p className="text-xl text-gray-600">
                We are committed to bridging the gap between complex data science concepts and practical business 
                applications, ensuring our clients achieve measurable results and sustainable competitive advantages 
                in today's data-driven economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="section-padding bg-gray-50">
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

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of data science and AI technologies, continuously exploring new methods and tools to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from project delivery to client relationships, ensuring exceptional results every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-expert-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as trusted partners, understanding their unique challenges and co-creating solutions that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Button Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Contact us today to discuss your data science and AI needs</p>
          </div>
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

