// src/pages/services/CustomWebApps.jsx
import { Link } from 'react-router-dom';

const CustomWebApps = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Custom Web Applications</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Tailored solutions built with modern technologies to solve your unique business challenges.
        </p>
        
        <div className="bg-gray-100 h-64 rounded-lg mb-8 flex items-center justify-center">
          [Web app interface screenshot]
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Our Development Stack</h2>
        <ul className="space-y-3 mb-8">
          {[
            "MERN Stack (MongoDB, Express, React, Node.js)",
            "User authentication & authorization",
            "Database design & integration",
            "RESTful API development",
            "Real-time features with Socket.io",
            "Cloud deployment (AWS, Vercel)"
          ].map((tech, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p className="mb-6">
          Custom web applications start at <strong>₹75,000</strong> with project-based pricing.
          We provide free initial consultation and project scoping.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Have a Project in Mind?</h3>
          <p className="mb-4">Let's turn your idea into a powerful web application.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomWebApps;