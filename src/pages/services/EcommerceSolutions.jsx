// EcommerceSolutions.jsx

// src/pages/services/EcommerceSolutions.jsx
import { Link } from 'react-router-dom';

const EcommerceSolutions = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">E-commerce Solutions</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Complete online store solutions that convert visitors into paying customers with 
          seamless shopping experiences.
        </p>
        
        <div className="bg-gray-100 h-64 rounded-lg mb-8 flex items-center justify-center">
          [E-commerce dashboard screenshot]
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Our E-commerce Features</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Mobile-optimized shopping experience",
            "Secure payment gateways (Razorpay, PayPal)",
            "Inventory and order management",
            "Product variations and filters",
            "Customer accounts and reviews",
            "Shipping and tax calculations"
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p className="mb-6">
          Our e-commerce solutions start at <strong>₹45,000</strong> with flexible monthly payment options.
          Includes 3 months of free maintenance.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Ready to Boost Your Online Sales?</h3>
          <p className="mb-4">Let's discuss how we can build your perfect online store.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSolutions;