<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-green-400">
          DevPortfolio
        </a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-green-500">About</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Projects</a>
          <a href="#blog" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Blog</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};
=======
// File: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming NavLink and MobileNavLink are exported from a HelperComponents.jsx file
// in the same directory (src/components/)
import { NavLink, MobileNavLink } from './HelperComponents';
// src/components/Navbar.jsx (add at top)
import { useLocation } from 'react-router-dom';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
// Then inside your Navbar component, you can use:
const location = useLocation();
// To track current route if needed
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-indigo-600" onClick={() => console.log('WebWeavers Logo clicked')}>
                    WebWeavers
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 font-medium text-gray-700">
                    <NavLink to="/" text="Home" />
                    <NavLink to="/about" text="About" />
                    <NavLink to="/services" text="Services" />
                    <NavLink to="/blog" text="Blog" />
                    <NavLink to="/contact" text="Contact" />
                </div>

                {/* Desktop Auth Buttons (Video.io style) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200" onClick={() => console.log('Login clicked')}>Login</a>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md" onClick={() => console.log('Sign Up clicked')}>Sign Up</button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={toggleMobileMenu}
                >
                    {isOpen ? (
                        // Inline SVG for FaTimes
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        // Inline SVG for FaBars
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 shadow-lg absolute w-full">
                    <MobileNavLink to="/" text="Home" onClick={toggleMobileMenu} />
                    <MobileNavLink to="/about" text="About" onClick={toggleMobileMenu} />
                    <MobileNavLink to="/services" text="Services" onClick={toggleMobileMenu} />
                    <MobileNavLink to="/blog" text="Blog" onClick={toggleMobileMenu} />
                    <MobileNavLink to="/contact" text="Contact" onClick={toggleMobileMenu} />
                    <div className="border-t border-gray-200 my-2"></div>
                    <MobileNavLink to="#" text="Login" onClick={() => { console.log('Login clicked'); toggleMobileMenu(); }} />
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md w-full" onClick={() => { console.log('Sign Up clicked'); toggleMobileMenu(); }}>Sign Up</button>
                </div>
            )}
        </nav>
    );
};

>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
export default Navbar;