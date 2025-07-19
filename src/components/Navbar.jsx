import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-800 shadow-lg'
            : 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            darkMode ? 'text-green-400' : 'text-indigo-600'
          }`}
        >
          CODDEX
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex space-x-6 font-medium ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          {['Home', 'About', 'Services', 'Blog', 'Contact'].map((text, index) => (
            <Link
              key={index}
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className={`hover:${
                darkMode ? 'text-green-400' : 'text-indigo-600'
              } transition-colors`}
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
       <button
  onClick={() => setDarkMode(!darkMode)}
  className="button p-2 w-10 h-10 flex items-center justify-center rounded-full"
>

          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}
          onClick={toggleMobileMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {['Home', 'About', 'Services', 'Blog', 'Contact'].map((text, index) => (
            <Link
              key={index}
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className={`block py-2 transition-colors duration-200 ${
                darkMode
                  ? 'text-gray-200 hover:text-green-400'
                  : 'text-gray-800 hover:text-indigo-600'
              }`}
              onClick={toggleMobileMenu}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
