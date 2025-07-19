// File: src/components/Services.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaServer,
  FaSearch,
  FaTools,
  FaMobile
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
      title: "Static Websites",
      description: "Fast, secure, and responsive websites that showcase your business professionally.",
    },
    {
      id: 2,
      icon: <FaShoppingCart className="text-indigo-600 text-4xl mb-4" />,
      title: "E-commerce Websites",
      description: "Complete online stores with payment integration and inventory management.",
    },
    {
      id: 3,
      icon: <FaMobile className="text-indigo-600 text-4xl mb-4" />,
      title: "Custom Web Apps",
      description: "Tailored solutions built with Node.js / MERN stack for your specific needs.",
    },
    {
      id: 4,
      icon: <FaServer className="text-indigo-600 text-4xl mb-4" />,
      title: "Hosting & Domain",
      description: "We handle all technical setup so you can focus on your business.",
    },
    {
      id: 5,
      icon: <FaSearch className="text-indigo-600 text-4xl mb-4" />,
      title: "SEO Optimization",
      description: "Boost visibility and traffic with our expert SEO strategies and tools.",
    },
    {
      id: 6,
      icon: <FaTools className="text-indigo-600 text-4xl mb-4" />,
      title: "Maintenance & Support",
      description: "Ongoing support and updates to keep your website secure and effective.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for startups, small businesses, and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-indigo-600"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
