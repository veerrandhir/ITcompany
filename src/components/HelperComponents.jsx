// src/components/HelperComponents.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ to, text }) => (
    <Link to={to} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200" onClick={() => console.log(`${text} clicked`)}>
        {text}
    </Link>
);

export const MobileNavLink = ({ to, text, onClick }) => (
    <Link to={to} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 block" onClick={onClick}>
        {text}
    </Link>
);

export const SocialIcon = ({ children, platform }) => (
    <a href="#" className="text-2xl hover:text-indigo-400" onClick={() => console.log(`${platform} icon clicked`)}>
        {children}
    </a>
);

export const FooterLinkGroup = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <ul>
            {links.map((link, index) => (
                <li key={index} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" onClick={() => console.log(`${link} clicked`)}>
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);