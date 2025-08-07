import React from 'react';

// ====================================================================
// FILE: src/components/LogoScroller.js
// ====================================================================
import logo1 from '../../assets/images/Scroller/my-gov1.png';
import logo2 from '../../assets/images/PreNavbar/government-of-india.png';


import logo4 from '../../assets/images/PreNavbar/NHM.png';
import logo5 from '../../assets/images/PreNavbar/nhscr-logo_1.png';


const LogoScroller = () => {
  const logos = [
    logo1,
    logo2,
   
    logo4,
    logo5,
   
    logo1, // Repeating logos to create a seamless scroll effect
    logo2,
    
    logo4,

    logo5,
    logo1,
    logo2,
    logo4,
    logo5,
    
  ];

  // To create a seamless loop, we duplicate the logos array.
  // The animation will run over the first half, and by the time it ends,
  // it will look like it's starting over from the beginning.
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-4">
      {/* This is the main container for our scroller. 
        'overflow-hidden' is crucial to hide the logos that are outside the viewport.
        'relative' and 'group' are used for a nice pause-on-hover effect.
      */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {extendedLogos.map((logo, index) => (
            <li key={index}>
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="h-12"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/120x48/cccccc/ffffff?text=Partner'; }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// To make this component work, you also need to add the animation
// to your tailwind.config.js file. Here's how:
/*
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-50%)' },
          }
        }
      },
    },
    plugins: [],
  }
*/

export default LogoScroller;
