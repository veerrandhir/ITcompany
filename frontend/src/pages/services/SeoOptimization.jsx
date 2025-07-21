// src/pages/services/SeoOptimization.jsx
import { Link } from 'react-router-dom';

const SeoOptimization = () => {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--text-color)] p-8 rounded-lg shadow-lg transition">
      <h1 className="text-3xl font-bold mb-6 text-[var(--link-color)]">
        SEO Optimization Services
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl mb-6 text-[var(--text-color-secondary)]">
          Improve your search rankings and drive qualified traffic to your website with our
          comprehensive SEO strategies.
        </p>

        <div className="rounded-lg overflow-hidden mb-8">
          <img
            className="w-full h-auto object-cover"
            src="https://res.cloudinary.com/drrtddlst/image/upload/v1752662486/team-meeting-on-project_bositx.png"
            alt="SEO analytics dashboard"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Our SEO Services
        </h2>
        <ul className="space-y-3 mb-8">
          {[
            "Comprehensive website audit",
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO improvements",
            "Content strategy development",
            "Monthly performance reporting",
          ].map((service, index) => (
            <li key={index} className="flex items-start text-[var(--text-color-secondary)]">
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
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-[var(--link-color)]">
          Pricing
        </h2>
        <p className="mb-6 text-[var(--text-color-secondary)]">
          SEO packages start at{" "}
          <strong className="text-[var(--link-color)]">₹9,999/month</strong> with 3-month minimum
          commitment. First month includes free comprehensive audit.
        </p>

        <div className="bg-[var(--section-bg)] p-6 rounded-lg border border-[var(--border-color)]">
          <h3 className="text-xl font-semibold mb-4 text-[var(--link-color)]">
            Ready to Rank Higher?
          </h3>
          <p className="mb-4 text-[var(--text-color-secondary)]">
            Let's improve your online visibility and attract more customers.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--link-color)] hover:brightness-110 text-[var(--button-text)] font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Boost Your SEO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeoOptimization;
