// File: src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import for the Link component

const Hero = () => {
    // Removed heroImage import and data-aos as they are not supported in this environment
    return (
        <section className="bg-gray-100 text-gray-800 py-20">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
                {/* Left Text */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Web Development <span className="text-indigo-600">That Drives Results</span>
                    </h1>
                    <p className="text-lg mb-6">
                        We craft beautiful, fast, and scalable websites that help your business grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition" onClick={() => console.log('Get Started button clicked')}>
                            Get Started
                        </Link>
                        <Link to="/services" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition" onClick={() => console.log('Our Services button clicked')}>
                            Our Services
                        </Link>
                    </div>
                </div>

                {/* Right Image Placeholder */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 flex items-center justify-center">
                    <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                        [Hero Illustration Placeholder]
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
