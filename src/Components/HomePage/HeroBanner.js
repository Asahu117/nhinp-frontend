import React from 'react';

// 1. Import your local banner image
import bannerImage from '../../assets/images/demo.jpg';

// ====================================================================
// FILE: src/components/HeroBanner.js
// ====================================================================

const HeroBanner = () => {
  return (
    <section>
      {/* Main Banner Image */}
      <div>
        <img 
          src={bannerImage} 
          alt="A collage of healthcare and innovation icons" 
          className="w-full h-auto"
        />
      </div>

      {/* Green Notification Bar */}
      <div className="bg-green-600 text-white text-center py-3">
        <p>We are open for new submissions for Product Innovation/Best Practices</p>
      </div>
    </section>
  );
};

export default HeroBanner;
