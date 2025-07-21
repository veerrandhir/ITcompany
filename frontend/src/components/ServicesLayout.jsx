import { Link, Outlet, useLocation } from 'react-router-dom';

const ServicesLayout = () => {
  const location = useLocation();
  const services = [
    { id: 'static-websites', name: 'Static Websites' },
    { id: 'ecommerce-solutions', name: 'E-commerce Solutions' },
    { id: 'custom-web-apps', name: 'Custom Web Apps' },
    { id: 'hosting-domain', name: 'Hosting & Domain' },
    { id: 'seo-optimization', name: 'SEO Optimization' },
  ];

  return (
    <div className="min-h-screen bg-[var(--body-bg)] text-[var(--text-color)] transition">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Services Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-[var(--card-bg)] text-[var(--text-color)] p-6 rounded-lg shadow-md sticky top-4 transition">
              <h2 className="text-2xl font-bold mb-6 text-[var(--link-color)]">Our Services</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.id}`}
                      className={`block py-2 px-3 rounded transition-colors duration-300
                        ${
                          location.pathname.includes(service.id)
                            ? 'bg-[var(--link-color)] text-[var(--button-text)]'
                            : 'hover:bg-[var(--section-bg)] hover:text-[var(--link-color)]'
                        }
                      `}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Content */}
          <div
            className="md:w-3/4"
          >
            <div
              className="rounded-lg p-6 border-2 transition-colors duration-300"
              style={{
                borderColor: `var(--border-color)`
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
