// src/pages/Services.jsx
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaServer, FaChartLine, FaTools } from 'react-icons/fa';
import CTA from '../components/CTA';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-indigo-600" />,
      title: "Static Websites",
      description: "Lightning-fast, secure websites that showcase your business professionally.",
      features: [
        "Mobile-optimized design",
        "SEO-friendly structure",
        "Fast loading (<2s)",
        "Content management system",
        "Contact forms integration"
      ],
      pricing: "Starting at ₹15,000"
    },
    {
      icon: <FaShoppingCart className="text-4xl mb-4 text-indigo-600" />,
      title: "E-commerce Solutions",
      description: "Complete online stores that convert visitors into customers.",
      features: [
        "Product catalog management",
        "Secure payment gateways",
        "Inventory tracking",
        "Order management system",
        "Mobile shopping optimized"
      ],
      pricing: "Starting at ₹45,000"
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-indigo-600" />,
      title: "Custom Web Apps",
      description: "Tailored solutions for your unique business needs.",
      features: [
        "Node.js/MERN stack",
        "User authentication",
        "Database integration",
        "API development",
        "Cloud deployment"
      ],
      pricing: "Starting at ₹75,000"
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-indigo-600" />,
      title: "Hosting & Domain",
      description: "Hassle-free infrastructure management.",
      features: [
        "Domain registration",
        "SSL certificates",
        "99.9% uptime guarantee",
        "Daily backups",
        "24/7 monitoring"
      ],
      pricing: "Starting at ₹1,999/month"
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-indigo-600" />,
      title: "SEO Optimization",
      description: "Get found by your ideal customers.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audit",
        "Content strategy",
        "Performance tracking"
      ],
      pricing: "Starting at ₹9,999/month"
    },
    {
      icon: <FaTools className="text-4xl mb-4 text-indigo-600" />,
      title: "Maintenance Plans",
      description: "Keep your site running smoothly.",
      features: [
        "Regular updates",
        "Security patches",
        "Performance optimization",
        "Content updates",
        "Priority support"
      ],
      pricing: "Starting at ₹3,999/month"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Web Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to grow your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch and beyond - we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="bg-indigo-50 text-indigo-700 font-medium py-1 px-3 rounded-full inline-block">
                    {service.pricing}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we deliver exceptional results for every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business goals and target audience</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">We create wireframes and visual concepts</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">We build with clean, efficient code</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">We deploy and monitor performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Services;