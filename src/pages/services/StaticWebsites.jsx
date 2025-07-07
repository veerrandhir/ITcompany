import { Link } from 'react-router-dom';

const StaticWebsites = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-4 border-red-500">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Static Websites</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Fast, secure, and responsive websites that showcase your business professionally without 
          the complexity of a database-driven system.
        </p>
        
        <div className="bg-gray-100 h-64 rounded-lg mb-8 flex items-center justify-center">
          [Static website screenshot/illustration]
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Static Websites?</h2>
        <ul className="space-y-3 mb-8">
          {[
            "Lightning-fast loading speeds (under 2 seconds)",
            "Enhanced security with no database vulnerabilities",
            "Mobile-responsive design that works on all devices",
            "Built-in SEO optimization",
            "Easy content updates with CMS integration"
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
          Our static websites start at <strong>₹15,000</strong> with flexible payment options available.
          Includes hosting setup and 1 month of free maintenance.
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-700">Ready to Get Started?</h3>
          <p className="mb-4">Contact us today to discuss your project requirements.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaticWebsites;