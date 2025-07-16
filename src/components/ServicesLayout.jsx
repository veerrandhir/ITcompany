// src/components/ServicesLayout.jsx
import { Link, Outlet } from 'react-router-dom';

const ServicesLayout = () => {
  const services = [
    { id: 'static-websites', name: 'Static Websites' },
    { id: 'ecommerce-solutions', name: 'E-commerce Solutions' },
    { id: 'custom-web-apps', name: 'Custom Web Apps' },
    { id: 'hosting-domain', name: 'Hosting & Domain' },
    { id: 'seo-optimization', name: 'SEO Optimization' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Services Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Our Services</h2>
              <ul className="space-y-3">
                {services.map(service => (
                  <li key={service.id}>
                    <Link 
                      to={`/services/${service.id}`}
                      className="block py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-700 transition"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Service Content */}
          <div className="md:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;