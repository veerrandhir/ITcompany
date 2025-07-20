// src/pages/services/CustomWebApps.jsx
import { Link } from 'react-router-dom';

const CustomWebApps = () => {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--text-color)] p-8 rounded-lg shadow-lg transition">
      <h1 className="text-3xl font-bold mb-6 text-[var(--link-color)]">
        Custom Web Applications
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-[var(--text-color-secondary)]">
          Tailored solutions built with modern technologies to solve your unique business challenges.
        </p>

        <div className="rounded-lg overflow-hidden mb-8">
          <img
            className="w-full h-auto object-cover"
            src="https://res.cloudinary.com/drrtddlst/image/upload/v1752662494/ecommerce-screen_t7zwej.png"
            alt="Custom Web App Interface Screenshot"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Our Development Stack
        </h2>
        <ul className="space-y-3 mb-8 text-[var(--text-color-secondary)]">
          {[
            "MERN Stack (MongoDB, Express, React, Node.js)",
            "User authentication & authorization",
            "Database design & integration",
            "RESTful API development",
            "Real-time features with Socket.io",
            "Cloud deployment (AWS, Vercel)"
          ].map((tech, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-[var(--link-color)] mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{tech}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Pricing
        </h2>
        <p className="mb-6 text-[var(--text-color-secondary)]">
          Custom web applications start at{" "}
          <strong className="text-[var(--link-color)]">₹75,000</strong> with project-based pricing.
          We provide free initial consultation and project scoping.
        </p>

        <div className="bg-[var(--section-bg)] p-6 rounded-lg border border-[var(--border-color)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--link-color)]">
            Have a Project in Mind?
          </h3>
          <p className="mb-4 text-[var(--text-color-secondary)]">
            Let's turn your idea into a powerful web application.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--link-color)] hover:brightness-110 text-[var(--button-text)] font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomWebApps;
