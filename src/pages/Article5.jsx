import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/website_banner_use_this_one.png';

const Article5 = () => {
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
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-24 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-white-200 font-semibold mb-4">Tutorial</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Getting Started with Python for Data Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
              A comprehensive guide to Python libraries and tools for data analysis.
            </p>
            <div className="text-lg text-blue-100">February 20, 2024</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white py-16">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Python has become the de facto language for data science due to its simplicity, powerful libraries, 
              and extensive community support. This comprehensive guide will help you get started with Python for 
              data science, covering essential libraries, tools, and best practices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Python for Data Science?</h2>
            <p className="text-gray-700 mb-8">
              Python's popularity in data science stems from several key advantages: its readable syntax, extensive 
              library ecosystem, strong community support, and excellent integration with other technologies. It's 
              also versatile enough to handle everything from data cleaning to machine learning model deployment.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Python Libraries for Data Science</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. NumPy</h3>
            <p className="text-gray-700 mb-8">
              NumPy is the foundation of the Python data science ecosystem. It provides support for large, 
              multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Pandas</h3>
            <p className="text-gray-700 mb-8">
              Pandas is built on top of NumPy and provides data structures and data analysis tools. It's particularly 
              powerful for working with structured data like CSV files, Excel spreadsheets, and SQL databases.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Matplotlib and Seaborn</h3>
            <p className="text-gray-700 mb-8">
              These libraries are essential for data visualization. Matplotlib provides the foundation for plotting, 
              while Seaborn offers a higher-level interface for creating attractive statistical visualizations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Scikit-learn</h3>
            <p className="text-gray-700 mb-8">
              Scikit-learn is the go-to library for machine learning in Python. It provides simple and efficient tools 
              for data mining and data analysis, including classification, regression, clustering, and dimensionality reduction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Setting Up Your Data Science Environment</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Python Installation</h3>
            <p className="text-gray-700 mb-8">
              Start by installing Python 3.8 or later. We recommend using Anaconda or Miniconda, which provide 
              package management and environment isolation capabilities essential for data science projects.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Jupyter Notebooks</h3>
            <p className="text-gray-700 mb-8">
              Jupyter Notebooks provide an interactive environment for data analysis and visualization. They're 
              perfect for exploratory data analysis, prototyping, and sharing your work with others.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Virtual Environments</h3>
            <p className="text-gray-700 mb-8">
              Use virtual environments to manage dependencies and avoid conflicts between different projects. 
              This is crucial when working on multiple data science projects with different requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your First Data Science Project</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 1: Data Loading and Exploration</h3>
            <p className="text-gray-700 mb-8">
              Start by loading your data using pandas. Use methods like <code>head()</code>, <code>info()</code>, 
              and <code>describe()</code> to get an initial understanding of your dataset.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 2: Data Cleaning</h3>
            <p className="text-gray-700 mb-8">
              Clean your data by handling missing values, removing duplicates, and correcting data types. 
              This step is crucial for ensuring the quality of your analysis.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 3: Exploratory Data Analysis</h3>
            <p className="text-gray-700 mb-8">
              Use visualization libraries to explore patterns and relationships in your data. Create histograms, 
              scatter plots, and correlation matrices to understand your data better.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 4: Building Models</h3>
            <p className="text-gray-700 mb-8">
              Apply machine learning algorithms using scikit-learn. Start with simple models and gradually 
              move to more complex ones as you gain experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Practices for Python Data Science</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Code Organization</h3>
            <p className="text-gray-700 mb-8">
              Organize your code into functions and classes. Use meaningful variable names and add comments 
              to explain complex logic. This makes your code more maintainable and shareable.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Version Control</h3>
            <p className="text-gray-700 mb-8">
              Use Git to track changes in your code and data. This is essential for collaboration and 
              maintaining a history of your analysis iterations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Documentation</h3>
            <p className="text-gray-700 mb-8">
              Document your analysis process, including the rationale behind your decisions and the 
              interpretation of your results. This is crucial for reproducibility and knowledge sharing.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Python's simplicity and extensive library ecosystem make it ideal for data science</li>
                <li>Start with essential libraries: NumPy, Pandas, Matplotlib, and Scikit-learn</li>
                <li>Set up a proper development environment with Jupyter Notebooks and virtual environments</li>
                <li>Follow a structured approach: load, clean, explore, and model your data</li>
                <li>Practice good coding habits including organization, version control, and documentation</li>
              </ul>
            </div>
          </div>

          {/* Back to Insights */}
          <div className="text-center mt-12">
            <Link 
              to="/insights" 
              className="btn-primary inline-flex items-center"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article5;

