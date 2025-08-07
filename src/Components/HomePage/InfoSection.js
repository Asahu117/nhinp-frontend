import React from 'react';

// ====================================================================
// FILE: src/components/InfoSection.js
// ====================================================================
import demoLogo1 from '../../assets/images/HomeInfo/about-nhinp.png';
const InfoSection = () => {
  return (
    <section className="bg-[#E9E8FD] py-16 px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* About the Portal Card (Left Side) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Portal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Text Content */}
              <div className="text-gray-600">
                <h3 className="text-xl font-semibold mb-2">National Healthcare Innovations Portal</h3>
                <p className="mb-4">
                  National Healthcare Innovation Portal is launched to serve as a platform in public domain to facilitate collection and dissemination of good practices and innovations that are found to be replicable. This portal serves as a gateway for integrating innovations into mainstream healthcare and...
                </p>
                <a 
                  href="#" 
                  className="text-red-500 border border-red-500 rounded-full py-2 px-16 hover:bg-red-500 hover:text-white transition duration-300 inline-block"
                >
                  Read More
                </a>
              </div>
              {/* Image Content */}
              <div className="flex justify-center items-center">
                 {/* <img 
                    src={demoLogo1}
                    alt="Healthcare Innovations" 
                    className="max-w-full h-auto"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x200/dbeafe/1e40af?text=Innovation'; }}
                 /> */}
                 <img 
                  src={demoLogo1}
                  alt="Healthcare Innovations" 
                  className="max-w-full h-auto"
  // ...
                />
              </div>
            </div>
          </div>

          {/* Recent Updates Card (Right Side) */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Updates</h2>
            <div className="space-y-4">
                {/* Update Item 1 */}
                <div>
                    <p className="text-sm text-gray-500">24 February, 2025</p>
                    <a href="#" className="font-semibold text-blue-600 hover:underline">
                        Portal is live for submission...
                    </a>
                </div>
                 {/* Update Item 2 */}
                 <div>
                    <p className="text-sm text-gray-500">24 February, 2025</p>
                    <p className="font-semibold text-gray-700">
                        The revamped NHInP portal is live for submission of innovation/Best Practices
                    </p>
                </div>
            </div>
            <div className="mt-6 text-right">
              {/* <a 
                href="#" 
                className="text-red-500  py-2 px-20 font-semibold hover:underline"
              >
                View all
              </a> */}

              <a 
                  href="#" 
                  className="text-red-500 border border-red-500 rounded-full py-2 px-16 hover:bg-red-500 hover:text-white transition duration-300 inline-block"
                >
                  View all
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
