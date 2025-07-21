// src/components/HelperComponents.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ to, text }) => (
    <Link
        to={to}
        className="text-[var(--text-color)] hover:text-[var(--link-hover-color)] font-medium transition-colors duration-200"
        onClick={() => console.log(`${text} clicked`)}
    >
        {text}
    </Link>
);

export const MobileNavLink = ({ to, text, onClick }) => (
    <Link
        to={to}
        className="text-[var(--text-color)] hover:text-[var(--link-hover-color)] font-medium transition-colors duration-200 py-2 block"
        onClick={onClick}
    >
        {text}
    </Link>
);

export const SocialIcon = ({ children, platform }) => (
    <a
        href="#"
        className="text-2xl text-[var(--link-color)] hover:text-[var(--link-hover-color)] transition-colors duration-200"
        onClick={() => console.log(`${platform} icon clicked`)}
    >
        {children}
    </a>
);

export const FooterLinkGroup = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-semibold text-[var(--text-color)] mb-4">{title}</h3>
        <ul>
            {links.map((link, index) => (
                <li key={index} className="mb-2">
                    <a
                        href="#"
                        className="text-[var(--muted-text)] hover:text-[var(--text-color)] transition-colors duration-200 text-sm"
                        onClick={() => console.log(`${link} clicked`)}
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);
