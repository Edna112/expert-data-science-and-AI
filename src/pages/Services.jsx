import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/website_banner_use_this_one.png';
import aiGeneratedImage from '../assets/ai-generated-9268114_1280.jpg';
import image22 from '../assets/image22.jpg';
import image33 from '../assets/image33.jpg';
import image44 from '../assets/image44.jpg';
import robotImage1 from '../assets/robot-8530775_1280.jpg';

const Services = () => {
  const services = [
    {
      title: "Data Strategy & Consulting",
      description: "Develop comprehensive data strategies that align with your business objectives and drive measurable outcomes.",
      image: aiGeneratedImage,
      alt: "Data Strategy and Consulting Services"
    },
    {
      title: "Machine Learning & AI Development",
      description: "Build custom ML models and AI solutions tailored to your specific business challenges and opportunities.",
      image: image22,
      alt: "Machine Learning and AI Development"
    },
    {
      title: "Data Engineering & Infrastructure",
      description: "Design and implement robust data pipelines and infrastructure to support scalable analytics and AI operations.",
      image: image33,
      alt: "Data Engineering and Infrastructure"
    },
    {
      title: "Advanced Analytics & Business Intelligence",
      description: "Create powerful dashboards and analytics solutions that provide real-time insights into your business performance.",
      image: image44,
      alt: "Advanced Analytics and Business Intelligence"
    },
    {
      title: "Model Deployment & MLOps",
      description: "Deploy and maintain production-ready ML models with comprehensive monitoring and automated retraining pipelines.",
      image: robotImage1,
      alt: "Model Deployment and MLOps"
    }
  ];

  const trainingCategories = [
    {
      title: "Cloud Fundamentals",
      courses: [
        "Cloud Computing",
        "Developing and Deploying ML Applications in the Cloud"
      ]
    },
    {
      title: "Computer Programming",
      courses: [
        "Python Programming for Data Science",
        "Linux for Data Science and Automation"
      ]
    },
    {
      title: "Data Science and Machine Learning",
      courses: [
        "Data Science Fundamentals",
        "Statistics Fundamentals",
        "Machine Learning Operations"
      ]
    },
    {
      title: "Deep Learning and AI Engineering",
      courses: [
        "Deep Learning Fundamentals",
        "Natural Language Processing",
        "Large Language Models and Transformers",
        "AI Engineering"
      ]
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 italic">
              Comprehensive data science and AI <br /> solutions to accelerate your business success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-30 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end data science and AI solutions designed to transform your business operations and drive measurable results.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
                }}
              >
                    {/* Teal-blue header */}
                    <div className="bg-gradient-accent px-4 py-3 min-h-[60px] flex items-center justify-center">
                      <h3 className="text-lg font-semibold text-white text-center leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Content area */}
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Text content */}
                      <div className="p-6 flex items-center justify-center">
                        <p className="text-gray-700 text-base leading-relaxed text-center">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Service Image */}
                      <div className="bg-gray-200 flex items-center justify-center min-h-[250px] p-3">
                        <motion.img 
                          src={service.image} 
                          alt={service.alt} 
                          className="w-full h-auto max-h-[280px] object-cover rounded-lg shadow-md"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training and Professional Development */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-30 mb-4">
              Training and Professional Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to equip your team with cutting-edge data science and AI skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(2, 138, 176, 0.3), 0 0 60px rgba(21, 140, 186, 0.2)"
                }}
              >
                    {/* Teal Header Bar */}
                    <div className="bg-gradient-accent px-3 py-3 min-h-[60px] flex items-center justify-center">
                      <h3 className="text-base font-semibold text-white text-center leading-tight">
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-4">
                      <ul className="space-y-2">
                        {category.courses.map((course, courseIndex) => (
                          <motion.li 
                            key={courseIndex} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: courseIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-3 h-3 bg-accent-10 rounded-full mt-1 mr-2 flex-shrink-0 flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-xs leading-relaxed">{course}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our services can help accelerate your data science and AI initiatives.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Contact Us Today
            </a>
            <a
              href="/schedule-consultation"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary-30 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
            >
              Schedule Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

