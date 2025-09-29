import React from 'react';
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
        className="relative text-white min-h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl min-h-[70vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 italic">
              Comprehensive data science and AI <br /> solutions to accelerate your business success
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end data science and AI solutions designed to transform your business operations and drive measurable results.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* Teal-blue header */}
                <div className="bg-[#158cba] px-6 py-4 min-h-[80px] flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white text-center leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Content area */}
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Text content */}
                  <div className="p-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Service Image */}
                  <div className="bg-gray-200 flex items-center justify-center min-h-[200px] p-4">
                    <img 
                      src={service.image} 
                      alt={service.alt} 
                      className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training and Professional Development */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training and Professional Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to equip your team with cutting-edge data science and AI skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Teal Header Bar */}
                <div className="bg-[#158cba] px-4 py-4 min-h-[80px] flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-white text-center leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start">
                        <div className="w-4 h-4 bg-[#158cba] rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 italic">
            Let's discuss how our services can help accelerate your data science and AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#158cba] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border-2 border-white"
            >
              Contact Us Today
            </a>
            <a
              href="/schedule-consultation"
              className="border-2 border-white text-white hover:bg-white hover:text-[#158cba] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

