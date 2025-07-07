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

export default Navbar;