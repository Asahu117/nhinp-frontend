


import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Helper component for SVG icons
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
};

// SVG path data for the dropdown arrow
const ICONS = {
  chevronDown: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
};

// ====================================================================
// NavItem Component (handles dropdowns)
// ====================================================================
const NavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <li
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <a href={item.href} className="flex items-center py-5 px-4 text-white hover:text-gray-300 transition-colors">
                <span>{item.label}</span>
                {item.children && <Icon path={ICONS.chevronDown} className="w-5 h-5 ml-1" />}
            </a>
            {isOpen && item.children && (
                <ul className="absolute left-0 mt-0 bg-white shadow-lg rounded-b-md py-2 w-56 z-10">
                    {item.children.map((child) => (
                        <li key={child.label}>
                            <a href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {child.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

NavItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};


// ====================================================================
// Main Navbar Component
// ====================================================================
const Navbar = ({ onLoginClick }) => {
    const navLinks = [
        { label: 'Home', href: '#' },
        {
            label: 'About Us',
            href: '#',
            children: [{ label: 'About NHIP', href: '#' }, { label: 'Vision & Mission', href: '#' }]
        },
        {
            label: 'Innovations Database',
            href: '#',
            children: [{ label: 'Search Innovations', href: '#' }, { label: 'Browse by Category', href: '#' }]
        },
        {
            label: 'Best Practices',
            href: '#',
            children: [{ label: 'Search Practices', href: '#' }, { label: 'Browse by State', href: '#' }]
        },
        { label: 'FAQ', href: '#' },
    ];

    return (
        // Using a specific dark blue color for the background
        // <nav className="bg-[#2a2f6e] shadow-md sticky top-0 z-50">
            <nav className="bg-[#1e2a4a] text-white font-semibold shadow-md sticky top-0 z-30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Navigation Links */}
                <ul className="flex items-center">
                    {navLinks.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                </ul>

                {/* Login Button */}
                <div className="py-3">
                    <button 
                    onClick={onLoginClick} 
          className="bg-white text-red-600 border-2 border-red-600 rounded-full py-1 px-5 text-sm font-bold hover:bg-gray-100 transition-colors"
        >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
