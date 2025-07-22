// File: src/components/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            title: "Starter",
            price: "₹5,999",
            features: [
                "1-page website",
                "Responsive design",
                "Basic SEO",
                "Hosting support",
            ],
        },
        {
            title: "Business",
            price: "₹9,999",
            features: [
                "Up to 4 pages",
                "Advanced design",
                "SEO & Analytics",
                "Custom contact form",
            ],
            popular: true,
        },
        {
            title: "Premium",
            price: "₹29,999",
            features: [
                "Unlimited pages",
                "E-commerce/Blog features",
                "Full-stack development",
                "1 month free support",
            ],
        },
    ];

    return (
        <section className="py-20 px-6 bg-section transition-colors duration-500">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text transition-colors duration-500">
                    Pricing Plans
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 bg-card text-text ${
                                plan.popular
                                    ? "border-2 border-primary dark:border-emerald-500"
                                    : "border border-gray-200 dark:border-gray-600"
                            }`}
                        >
                            <h3 className="text-xl font-bold text-primary dark:text-emerald-400 mb-4 transition-colors">
                                {plan.title}
                            </h3>
                            <div className="text-3xl font-extrabold mb-6 transition-colors">
                                {plan.price}
                            </div>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((f, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-text/80 transition-colors"
                                    >
                                        ✅ <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
  to="/contact"
  className="button"
>
  Buy Now
</Link>

                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
