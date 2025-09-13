import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/sky_rocks_banner_3.png';

const Services = () => {
  const services = [
    {
      number: "1",
      title: "Ideation, Strategy & Solution Design",
      description: "We collaborate with stakeholders to define clear problem statements, business objectives, technical requirements, and strategic solution designs – ensuring all data science and AI projects are value-driven."
    },
    {
      number: "2", 
      title: "Data Science & AI Implementation",
      description: "We translate strategic designs into production-ready data science and AI solutions — handling data preparation, model development, validation, deployment, and the delivery of analytic insights and dashboards."
    },
    {
      number: "3",
      title: "Workflow Automation",
      description: "We streamline and automate, analytics, and machine learning pipelines — from data ingestion, preparation, and transformation to model building, optimization, deployment, and intelligence dashboard reporting."
    },
    {
      number: "4",
      title: "Production deployment",
      description: "We deploy machine learning models and analytics solutions into production environments using automated pipelines – ensuring reliable integration with existing systems."
    },
    {
      number: "5",
      title: "Monitoring",
      description: "We implement continuous monitoring of data quality and model performance to ensure accuracy, reliability, and compliance — enabling early detection of data drift and model degradation."
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
        className="relative text-white"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive data science and AI solutions to accelerate your business success
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
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
                {/* Blue header */}
                <div className="bg-expert-blue px-4 md:px-6 py-3 md:py-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {service.number}. {service.title}
                  </h3>
                </div>
                
                {/* Content area */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Text content */}
                  <div className="p-4 md:p-8">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Image placeholder */}
                  <div className="bg-gray-200 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium">Service Image</p>
                      <p className="text-xs">Professional illustration</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training and Professional Development */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training and Professional Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to equip your team with cutting-edge data science and AI skills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trainingCategories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-expert-blue rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-expert-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our services can help accelerate your data science and AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary bg-white text-expert-blue hover:bg-gray-100"
            >
              Contact Us Today
            </a>
            <a
              href="/schedule-consultation"
              className="btn-secondary border-white text-white hover:bg-white hover:text-expert-blue"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Next Button Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Our Insights</h2>
            <p className="text-xl text-gray-600">Read our latest articles and tutorials on data science and AI</p>
          </div>
          <Link 
            to="/insights" 
            className="btn-primary inline-flex items-center text-lg px-8 py-4"
          >
            View Our Insights
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

