// File: src/components/Pricing.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import for the Link component

const Pricing = () => {
    const plans = [
        {
            title: "Starter",
            price: "₹4,999",
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
                "Up to 5 pages",
                "Advanced design",
                "SEO & Analytics",
                "Custom contact form",
            ],
            popular: true,
        },
        {
            title: "Premium",
            price: "₹14,999",
            features: [
                "Unlimited pages",
                "E-commerce/Blog features",
                "Full-stack development",
                "1 month free support",
            ],
        },
    ];

    return (
        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Pricing Plans</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 bg-white ${
                                plan.popular ? "border-2 border-indigo-600" : ""
                            }`}
                        >
                            <h3 className="text-xl font-bold text-indigo-600 mb-4">{plan.title}</h3>
                            <div className="text-3xl font-extrabold mb-6">{plan.price}</div>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                {plan.features.map((f, i) => (
                                    <li key={i}>✅ {f}</li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
                                onClick={() => console.log(`Choose ${plan.title} Plan clicked`)}
                            >
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
