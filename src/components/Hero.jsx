// File: src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Optional: Remove if you don’t use React Router

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        {/* ✅ Fixed: Replaced invalid .png with a demo .mp4 */}
        <source
          src="https://res.cloudinary.com/drrtddlst/video/upload/v1752729158/87593-602317653_small_hcsodg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content  Profile section*/}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="https://res.cloudinary.com/drrtddlst/image/upload/v1752753900/CODDEXLogo_fchgzz.png"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-green-500 mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, We Are  <span className="text-green-600">CODDEX Team</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-red-300-bold mb-8">
          Complete Web Solution | Custome Website Develoment | E-Commerce App and Website
        </p>
        <div className="flex space-x-4">
          {/* ✅ If using React Router */}
          <Link
            to="/contact"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
          >
            Hire US
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg font-bold hover:bg-green-500 hover:text-white transition"
          >
            View Projects
          </Link>

          {/* ✅ If NOT using React Router, replace <Link> with <a>
          <a
            href="#hire-me"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg font-bold hover:bg-green-500 hover:text-white transition"
          >
            View Projects
          </a>
          */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
