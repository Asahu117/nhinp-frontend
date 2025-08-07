import React from 'react';
import PropTypes from 'prop-types';

// Import your local images
import emblem from '../../assets/images/PreNavbar/government-of-india.png';
import flag from '../../assets/images/PreNavbar/Indian-Flag.png';

import portalLogo from '../../assets/images/PreNavbar/main-logo.svg';
import partnerLogo from '../../assets/images/PreNavbar/NHM.png';
import partnerLogo2 from '../../assets/images/PreNavbar/nhscr-logo_1.png'; // Assuming you have a second partner logo
import sitemapIcon from '../../assets/images/PreNavbar/Sitemap.svg';

// Helper component for icons
const Icon = ({ path, className = "w-4 h-3" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
};

// const ICONS = {
//     sitemap: sitemapIcon,
//     contact: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
// };

const ICONS = {
    sitemap:  "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z",
    contact: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
};

// ====================================================================
// Component 1: TopBar
// ====================================================================
const TopBar = () => {
    return (
        <div className="bg-gray-100 border-b border-gray-200 text-sm text-gray-700">
            <div className="container mx-auto px-16 flex justify-between items-center py-1">
                {/* Left Side */}
                <div className="flex items-center space-x-3">
                    <img src={emblem} alt="Indian Emblem" className="h-7" />
                    <img src={flag} alt="Indian Flag" className="h-6" />
                </div>

                {/* Center */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <button className="text-xs">A-</button>
                        <button className="text-sm">A</button>
                        <button className="text-base">A+</button>
                    </div>
                    <a href="https://nhinp.org/screen-reader" className="hover:underline">Screen Reader</a>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <a href="https://nhinp.org/site-map" className="flex items-center space-x-1 hover:underline">
                        <Icon path={ICONS.sitemap} />
                        <span>Sitemap</span>
                    </a>
                    <a href="https://nhinp.org/contact-us" className="flex items-center space-x-1 hover:underline">
                        <Icon path={ICONS.contact} />
                        <span>Contact Us</span>
                    </a>
                    <img src={partnerLogo2} alt="Partner Logo 1" className="h-6" />
                    <img src={partnerLogo} alt="Partner Logo 2" className="h-6" />
                </div>
            </div>
        </div>
    );
};


// ====================================================================
// Component 2: PortalHeader
// ====================================================================
const PortalHeader = () => {
    return (
        <div className="bg-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Portal Title */}
                <div>
                    <img src={portalLogo} alt="National Healthcare Innovations Portal" className="h-6" />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                    <a href="#" className="text-red-600 border border-red-600 rounded-md py-2 px-4 text-sm font-semibold hover:bg-red-50 transition-colors">
                        Check Status
                    </a>
                    <a href="#" className="bg-red-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-red-700 transition-colors">
                        Submit Best Practices/Program Innovations
                    </a>
                    <a href="#" className="bg-red-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-red-700 transition-colors">
                        Submit Product Innovation
                    </a>
                </div>
            </div>
        </div>
    );
};


// ====================================================================
// Main Export (You can export both and decide how to use them in App.js)
// For simplicity, we can wrap them in a single component.
// ====================================================================

const PreNavbarHeader = () => {
    return (
        <>
            <TopBar />
            <PortalHeader />
        </>
    );
};


export default PreNavbarHeader;

