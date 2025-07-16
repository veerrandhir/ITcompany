<<<<<<< HEAD
const Services = () => {
  const services = [
    {
      id: 1,
      title: "API Development",
      description: "Custom RESTful & GraphQL APIs with Node.js, Express, and MongoDB.",
      icon: "🔌"
    },
    {
      id: 2,
      title: "Backend Optimization",
      description: "Improve database queries, caching, and server performance.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Cloud Deployment",
      description: "AWS, Google Cloud, or Azure setup for scalable applications.",
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Freelancing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
=======
import {
  FaLaptopCode,
  FaShoppingCart,
  FaServer,
  FaSearch,
  FaTools,
  FaMobile
} from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
    const services = [
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.999 18.293l-3.5-3.5a1 1 0 00-1.414 0l-1.414 1.414a1 1 0 000 1.414l3.5 3.5a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.414zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-12h2v6h-2z"/></svg>, // FaLaptopCode
            title: "Static Websites",
            description: "Fast, secure, and responsive websites that showcase your business professionally.",
            imagePlaceholder: "[Website Image Placeholder]"
        },
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4zm2 2h2v2H6V7zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-8h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z"/></svg>, // FaShoppingCart
            title: "E-commerce Websites",
            description: "Complete online stores with payment integration and inventory management.",
            imagePlaceholder: "[E-commerce Image Placeholder]"
        },
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm-1 18H8V4h8v16zm-3-14h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>, // FaMobile
            title: "Custom Web Apps",
            description: "Tailored solutions built with Node.js / MERN stack for your specific needs.",
            imagePlaceholder: "[App Development Image Placeholder]"
        },
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14h-2v-2h-2v2h-2v-2h-2v2h-2v-2H7v2H5v-2H3v2H1v-2H0v2H0c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4v-2h-1zm-1-10h-2V2h-2v2h-2V2h-2v2H7V2H5v2H3V2H1v2H0v2h24V4h-1zm-1 8H5V6h14v6z"/></svg>, // FaServer
            title: "Hosting & Domain",
            description: "We handle all technical setup so you can focus on your business.",
            imagePlaceholder: "[Hosting Image Placeholder]"
        },
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0017 10a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>, // FaSearch
            title: "SEO Optimization",
            description: "Boost visibility and traffic with our expert SEO strategies and tools.",
            imagePlaceholder: "[SEO Image Placeholder]",
        },
        {
            icon: <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17.062V6.938A2.94 2.94 0 0019.062 4H4.938A2.94 2.94 0 002 6.938v10.124A2.94 2.94 0 004.938 20h14.124A2.94 2.94 0 0022 17.062zM4 6.938a.938.938 0 01.938-.938h14.124a.938.938 0 01.938.938v10.124a.938.938 0 01-.938.938H4.938a.938.938 0 01-.938-.938V6.938zm1 2h2v2H5V8.938zm0 4h2v2H5v-2zm4-4h2v2H9V8.938zm0 4h2v2H9v-2zm4-4h2v2h-2V8.938zm0 4h2v2h-2v-2zm4-4h2v2h-2V8.938zm0 4h2v2h-2v-2z"/></svg>, // FaTools
            title: "Maintenance & Support",
            description: "Ongoing support and updates to keep your website secure and effective.",
            imagePlaceholder: "[Maintenance Image Placeholder]"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for startups, small businesses, and enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-indigo-600"
                        >
                            <div className="bg-gray-100 h-48 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                                {service.imagePlaceholder}
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 transform group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
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
>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
