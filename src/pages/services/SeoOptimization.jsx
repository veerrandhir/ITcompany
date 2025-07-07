// src/pages/services/SeoOptimization.jsx
import { Link } from 'react-router-dom';

const SeoOptimization = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">SEO Optimization Services</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Improve your search rankings and drive qualified traffic to your website with our 
          comprehensive SEO strategies.
        </p>
        
        <div className="bg-gray-100 h-64 rounded-lg mb-8 flex items-center justify-center">
          [SEO analytics dashboard]
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Our SEO Services</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Comprehensive website audit",
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO improvements",
            "Content strategy development",
            "Monthly performance reporting"
          ].map((service, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p className="mb-6">
          SEO packages start at <strong>₹9,999/month</strong> with 3-month minimum commitment.
          First month includes free comprehensive audit.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Ready to Rank Higher?</h3>
          <p className="mb-4">Let's improve your online visibility and attract more customers.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Boost Your SEO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeoOptimization;