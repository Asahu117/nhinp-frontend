import React from 'react';

// ====================================================================
// FILE: src/components/Footer.js
// ====================================================================

const Footer = () => {

  // Helper component for the title underline style
  const TitleUnderline = () => (
    <div className="flex mt-1 mb-4">
      <div className="w-10 h-0.5 bg-cyan-400"></div>
      <div className="w-16 h-0.5 bg-gray-500"></div>
    </div>
  );

  const quickLinks = ['Home', 'About Us', 'Best Practices', 'Recent Updates', 'FAQ'];
  const otherLinks = ['Website Policies', 'Privacy Policies', 'Terms & Conditions', 'Sitemap', 'Feedback'];

  return (
    <footer className="bg-[#1e2a4a] text-white pt-16 pb-8 px-24 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <TitleUnderline />
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Other Links */}
          <div>
            <h3 className="text-lg font-semibold">Other Links</h3>
            <TitleUnderline />
            <ul className="space-y-2">
              {otherLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <TitleUnderline />
            <p className="text-gray-300 text-sm leading-relaxed">
              National Health Systems Resource Centre,
              <br />
              NHFW Campus,
              <br />
              Baba Gangnath Marg,
              <br />
              Munirka,
              <br />
              New Delhi 110067
            </p>
          </div>

          {/* Column 4: Visitors & Connect */}
          <div>
            <h3 className="text-lg font-semibold">Visitors</h3>
            <TitleUnderline />
            <p className="text-gray-300 text-sm">Total Visitors: 41772</p>

            <h3 className="text-lg font-semibold mt-8">Connect With Us</h3>
            <TitleUnderline />
            <p className="text-gray-300 text-sm">91-11-2610-8983/84/92/93</p>
          </div>

        </div>
      </div>
      
      {/* Scroll to top button, as seen on the far right of the image */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-4 right-4 bg-cyan-400 text-white w-8 h-8 rounded-full flex items-center justify-center"
        aria-label="Scroll to top"
      >
        ^
      </button>
    </footer>
  );
};

export default Footer;
