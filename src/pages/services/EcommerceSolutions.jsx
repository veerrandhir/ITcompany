// src/pages/services/EcommerceSolutions.jsx
import { Link } from 'react-router-dom';

const EcommerceSolutions = () => {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--text-color)] p-8 rounded-lg shadow-lg transition">
      <h1 className="text-3xl font-bold mb-6 text-[var(--link-color)]">
        E-commerce Solutions
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-[var(--text-color-secondary)]">
          Complete online store solutions that convert visitors into paying
          customers with seamless shopping experiences.
        </p>

        <div className="rounded-lg overflow-hidden mb-8">
          <img
            className="w-full h-auto object-cover"
            src="https://res.cloudinary.com/drrtddlst/image/upload/v1752662494/ecommerce-screen-multiplewindow-open_yv9nxq.png"
            alt="E-commerce Dashboard Screenshot"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Our E-commerce Features
        </h2>
        <ul className="space-y-3 mb-8 text-[var(--text-color-secondary)]">
          {[
            "Mobile-optimized shopping experience",
            "Secure payment gateways (Razorpay, PayPal)",
            "Inventory and order management",
            "Product variations and filters",
            "Customer accounts and reviews",
            "Shipping and tax calculations",
          ].map((feature, index) => (
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
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Pricing
        </h2>
        <p className="mb-6 text-[var(--text-color-secondary)]">
          Our e-commerce solutions start at{" "}
          <strong className="text-[var(--link-color)]">₹45,000</strong> with
          flexible monthly payment options. Includes 3 months of free
          maintenance.
        </p>

        <div className="bg-[var(--section-bg)] p-6 rounded-lg border border-[var(--border-color)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--link-color)]">
            Ready to Boost Your Online Sales?
          </h3>
          <p className="mb-4 text-[var(--text-color-secondary)]">
            Let's discuss how we can build your perfect online store.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--link-color)] hover:brightness-110 text-[var(--button-text)] font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSolutions;
