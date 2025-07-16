<<<<<<< HEAD
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
        <source src="https://res.cloudinary.com/drrtddlst/image/upload/v1752662497/front-page-teamlooking-at-screen-with-smile_xqzpgz.png" type="image/.png" />
      </video>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Profile" 
          className="w-32 h-32 rounded-full border-4 border-green-500 mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-green-500">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Backend Engineer | Node.js Specialist | Freelancer
        </p>
        <div className="flex space-x-4">
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
        </div>
      </div>
    </div>
  );
};
export default Hero;
=======
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
>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
