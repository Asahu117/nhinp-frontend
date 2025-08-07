
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import bigimage from '../../assets/images/FaqGallary/big.jpg'; // Import the local image you want to use
// import smallimage1 from 'src/assets/images/FaqGallary/small1.jpg'; // Import the local image you want to us
// import smallimage2 from 'src/assets/images/FaqGallary/small2.jpg';
// import smallimage3 from 'src/assets/images/FaqGallary/small3.jpg';
// import smallimage4 from 'src/assets/images/FaqGallary/small4.jpg'; // Import the local image you want to use
//  // Import the local image you want to use

import bigimage from '../../assets/images/FaqGallary/big.jpg';
import smallimage1 from '../../assets/images/FaqGallary/small1.jpg';
import smallimage2 from '../../assets/images/FaqGallary/small2.jpg';
import smallimage3 from '../../assets/images/FaqGallary/small3.jpg';
import smallimage4 from '../../assets/images/FaqGallary/small4.jpg';

// ====================================================================
// HELPER COMPONENT 1: AccordionItem
// ====================================================================
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className="text-xl font-light text-gray-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-2 pb-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// PropTypes validation for AccordionItem
AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// ====================================================================
// HELPER COMPONENT 2: FAQSection
// ====================================================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: 'What is National Health Innovation Portal about?',
      answer: 'The National Healthcare Innovations Portal is an attempt to pool-in and showcase innovative programs designs, practices, technology solutions and prod...'
    },
    {
      question: 'Who all can submit an innovation?',
      answer: 'Any individual, group, or organization can submit an innovation. This includes healthcare professionals, researchers, students, startups, and established companies.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You will need to provide a detailed description of the innovation, its potential impact, any existing data or prototypes, and contact information.'
    }
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E9E8FD] p-6 rounded-lg shadow-sm border border-gray-200 h-full">
      <div className="bg-[#E9E8FD] p-3 rounded-t-md mb-4 -m-6 border-b">
        <h2 className="text-xl font-bold text-gray-800 px-3">Frequently Asked Questions</h2>
      </div>
      <div>
        {faqData.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div className="mt-6">
        <a href="https://google.com" className="text-red-500 border border-red-500 rounded-full py-2 px-5 hover:bg-red-500 hover:text-white transition duration-300 inline-block text-sm">
          View all
        </a>
      </div>
    </div>
  );
};

// ====================================================================
// HELPER COMPONENT 3: MediaGallery
// ====================================================================
const MediaGallery = () => {
  // The array now has 5 images to match the layout
  const images = [
    bigimage,
    smallimage1,
    smallimage2,
    smallimage3,
    smallimage4,
    
    
  ];

  return (
    <div className="bg-[#E9E8FD] p-6 rounded-lg shadow-sm border border-gray-200 h-full">
      <div className="bg-[#E9E8FD] p-3 rounded-t-md mb-4 -m-6 border-b">
        <h2 className="text-xl font-bold text-gray-800 px-3">Media gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2">
          {/* Corrected: Removed redundant "image" word from alt text */}
          <img src={images[0]} alt="Gallery event 1" className="w-full h-full object-cover rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x270/dbeafe/1e40af?text=Event+Photo'; }} />
        </div>
        {images.slice(1).map((img, index) => (
          <div key={index}>
            {/* Corrected: Removed redundant "image" word from alt text */}
            <img src={img} alt={`Gallery event ${index + 2}`} className="w-full h-full object-cover rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x135/dbeafe/1e40af?text=Photo'; }} />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="#" className="text-red-500 border border-red-500 rounded-full py-2 px-5 hover:bg-red-500 hover:text-white transition duration-300 inline-block text-sm">
          View all
        </a>
      </div>
    </div>
  );
};


// ====================================================================
// FILE: src/components/FAQandGallery.js (The Main Component)
// ====================================================================
const FAQandGallery = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <FAQSection />
          {/* Right Column */}
          <MediaGallery />
        </div>
      </div>
    </section>
  );
};

export default FAQandGallery;
