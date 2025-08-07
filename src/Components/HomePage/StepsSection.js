
import React from 'react';

// 1. Import your local image
//import stepIcon from '../assets/images/step-11111-graphic.svg'; // Placeholder for step icon

 import step1 from '../../assets/images/StepSection/step-11111-graphic.svg';
 import step2 from '../../assets/images/StepSection/step-222-graphic.svg'
 import step3 from '../../assets/images/StepSection/step-003-graphic.svg';
 import step4 from '../../assets/images/StepSection/step-4444-graphic.svg';

// ====================================================================
// FILE: src/components/StepsSection.js
// ====================================================================

const StepsSection = () => {
  const steps = [
    {
      step: 1,
      title: 'Choose Innovation Type',
      description: 'Select your innovation type from our options, tailored to best fit your idea.',
      icon: step1,
    },
    {
      step: 2,
      title: 'Fill Details',
      description: 'Provide essential details in the submission form, ensuring a comprehensive presentation.',
      icon: step2,
    },
    {
      step: 3,
      title: 'Receive Confirmation',
      description: 'Expect a prompt confirmation email acknowledging your successful submission.',
      icon: step3,
    },
    {
      step: 4,
      title: 'Check Status',
      description: "Track your innovation's progress with our convenient status-check feature.",
      icon: step4,
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Submit Innovation in 4 Easy Steps</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              {/* Step Title Bar - Updated Design */}
              <div className="bg-[#E9E8FD] p-2 rounded-t-md mb-4 flex items-center border-b-2 border-gray-300">
                <div className="bg-white border border-gray-300 px-3 py-1 rounded-md text-sm font-semibold text-gray-700">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-gray-700 ml-3">{item.title}</h3>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 h-24 w-full items-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="h-full w-auto"
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/96x96/f3f4f6/ef4444?text=Step+${item.step}`; }}
                />
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
