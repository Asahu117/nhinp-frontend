
import React from 'react';
import PropTypes from 'prop-types';

// Import your local images using relative paths
import programInnovationImg from "../../assets/images/demo.jpg";
import productInnovationImg from "../../assets/images/ProductInnovation/program-innovtion-01-01.png";

// This is a helper component for displaying the cards.
const InnovationCard = ({ data }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-100 p-4 flex justify-center">
            <img 
                src={data.image} 
                alt={data.title} 
                className="h-48 w-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x200/dbeafe/1e40af?text=Innovation+Image'; }}
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h3>
            <p className="text-gray-600 mb-6 text-sm">{data.description}</p>
            <div className="flex items-center space-x-4">
                <a href="#" className="bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                    {data.button1Text}
                </a>
                <a href="#" className="text-gray-600 text-sm font-semibold border border-gray-400 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                    {data.button2Text}
                </a>
            </div>
        </div>
    </div>
);

// PropTypes validation for the InnovationCard component
InnovationCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button1Text: PropTypes.string.isRequired,
    button2Text: PropTypes.string.isRequired,
  }).isRequired,
};


// ====================================================================
// FILE: src/components/InnovationAreas.js
// ====================================================================

const InnovationAreas = () => {
  // Data for the first card
  const programInnovation = {
    image: programInnovationImg,
    title: 'Program Innovations/ Best practices',
    description: 'Several program innovations/ best practices are existing or are facilitated at various levels of healthcare delivery as a response to a specific probl...',
    button1Text: 'Submit Best Practices/ Innovations',
    button2Text: 'Read More',
  };

  // Data for the second card
  const productInnovation = {
    image: productInnovationImg,
    title: 'Product Innovations',
    description: 'Health Products including Medical Devices, innovative technologies including Healthcare IT, m-health, and tele-health/e-health form a bulk of product...',
    button1Text: 'Submit Innovation',
    button2Text: 'Read More',
  };

  return (
    // The background color has been updated here
    <section className="bg-[#E9E8FD] py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-700 bg-white inline-block px-12 py-3 rounded-md shadow-sm border">
            Areas of Innovation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InnovationCard data={programInnovation} />
          <InnovationCard data={productInnovation} />
        </div>
      </div>
    </section>
  );
};

export default InnovationAreas;
