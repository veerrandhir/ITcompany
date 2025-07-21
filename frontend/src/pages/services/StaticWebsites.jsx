// src/pages/services/StaticWebsites.jsx
import React from "react";

const StaticWebsites = () => {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--text-color)] p-8 rounded-lg shadow-lg transition">
      <h1 className="text-3xl font-bold text-[var(--link-color)] mb-4">
        Static Websites
      </h1>
      <p className="text-lg text-[var(--text-color-secondary)] mb-6">
        Fast, secure, and responsive websites that showcase your business
        professionally without the complexity of a database-driven system.
      </p>

      <div className="rounded-lg overflow-hidden mb-6">
        <img
          className="w-full h-auto object-cover"
          src="https://res.cloudinary.com/drrtddlst/image/upload/v1752662480/Staticdevelopershowning-hir-screen_skggz4.png"
          alt="Static Website Example"
        />
      </div>

      <h2 className="text-2xl font-semibold text-[var(--link-color)] mb-3">
        Why Choose Our Static Websites?
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-[var(--text-color-secondary)]">
        <li>✔ SEO-friendly structure</li>
        <li>✔ Super fast loading (&lt;2s)</li>
        <li>✔ Easy content updates</li>
        <li>✔ Contact forms integration</li>
      </ul>

      <p className="mt-6 text-[var(--text-color-secondary)]">
        Whether you need a portfolio, a landing page, or a small business site,
        our static website solutions offer the perfect balance of simplicity and
        performance.
      </p>
    </div>
  );
};

export default StaticWebsites;
