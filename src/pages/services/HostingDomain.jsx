// src/pages/services/HostingDomain.jsx
import { Link } from 'react-router-dom';

const HostingDomain = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Hosting & Domain Services</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Reliable hosting solutions with 99.9% uptime and domain registration services to establish 
          your online presence.
        </p>
        
        <div className="bg-gray-100 h-64 rounded-lg mb-8 flex items-center justify-center">
          [Server infrastructure image]
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Our Hosting Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Shared Hosting", features: ["Perfect for small websites", "5GB SSD Storage", "Unmetered Bandwidth"] },
            { title: "VPS Hosting", features: ["Dedicated Resources", "Full Root Access", "Scalable Performance"] },
            { title: "WordPress Hosting", features: ["Optimized for WP", "Auto Updates", "Staging Environment"] },
            { title: "Domain Services", features: [".com, .in, .net domains", "DNS Management", "Domain Privacy"] }
          ].map((plan, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
              <ul className="space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p className="mb-6">
          Hosting plans start at <strong>₹1,999/month</strong>. Domain registration starts at <strong>₹799/year</strong>.
          Includes free SSL certificate and email setup.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Need Hosting Solutions?</h3>
          <p className="mb-4">We'll handle all the technical setup for you.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Get Hosting Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostingDomain;