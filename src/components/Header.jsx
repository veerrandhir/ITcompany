import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Web Development <span className="text-indigo-500">That Drives Results</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We craft beautiful, fast, and scalable websites that help your business grow.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right side video */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-lg shadow-lg w-full h-64 flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/drrtddlst/video/upload/v1752767168/A_mesmerizing_aerial_view_of_a_bustling_city_intersection_surroun_113c8a21-fc3c-4f64-b26c-825996dfb296_oaezte.mp4" // Update path as per your public folder
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
