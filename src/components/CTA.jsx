// File: src/components/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import for the Link component

const CTA = () => {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-28 px-6"
        >
            {/* Removed the opacity div as the gradient is now directly on the section */}

            <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-4 sm:px-8">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Let’s Take Your Business Online
                </h2>
                <p
                    className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10"
                >
                    Our expert team crafts stunning websites that drive traffic, generate leads, and grow your brand.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contact"
                        className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                        onClick={() => console.log('Get Started clicked')}
                    >
                        🚀 Get Started
                    </Link>
                    <Link
                        to="/contact"
                        className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-indigo-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
                        onClick={() => console.log('Schedule a Call clicked')}
                    >
                        📞 Schedule a Call
                    </Link>
                </div>
            </div>

            {/* Decorative gradient circles */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse z-0"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full blur-2xl z-0"></div>
        </section>
    );
};

export default CTA;
