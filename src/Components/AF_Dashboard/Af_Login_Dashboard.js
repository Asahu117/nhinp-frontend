
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
// import CryptoJS from 'crypto-js'; // 1. Import the crypto library

// // Import your local images
// import dashboardBg from '../../assets/images/LoginPage/loginbanner.png';
// import userPhoto from '../../assets/images/demo.jpg'; 

// // ====================================================================
// // FILE: src/Components/AF_Dashboard/Af_Login_Dashboard.js
// // ====================================================================

// const Dashboard = ({ user, onLogout }) => {
//   // 2. This is where you add the decryption logic
//   const { userId: urlSafeId } = useParams();
//   const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

//   let userId = '';
//   try {
//     // Decode the URL-safe string
//     const encryptedId = decodeURIComponent(urlSafeId);
    
//     // Decrypt the ID using your secret key
//     const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
//     userId = bytes.toString(CryptoJS.enc.Utf9);
//   } catch (error) {
//     console.error("Failed to decrypt user ID:", error);
//     // You can handle errors here, like redirecting to a login page
//   }
//   // --- End of decryption logic ---

//   const [showDetails, setShowDetails] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     onLogout();
//   };

//   const detailsToDisplay = user && user.user ? user.user : {};
//   const userDetailsArray = Object.entries(detailsToDisplay);

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
//       style={{ backgroundImage: `url(${dashboardBg})` }}
//     >
//       <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-4xl w-full relative">
//         <button
//           onClick={handleLogout}
//           className="absolute top-4 right-4 bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm"
//         >
//           Logout
//         </button>

//         <div className="flex items-center justify-center mb-6 space-x-4">
//           <img
//             src={userPhoto}
//             alt="User profile"
//             className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
//           />
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
//             {/* 3. The decrypted userId is now displayed here */}
//             <p className="text-gray-600">Welcome, {detailsToDisplay.firstname || 'User'}! (ID: {userId})</p>
//           </div>
//         </div>

//         <div className="my-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
//           <h3 className="text-lg font-semibold text-blue-800 mb-2">NHSRC WELCOMING YOU</h3>
//           <button
//             onClick={() => setShowDetails(!showDetails)}
//             className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//           >
//             {showDetails ? 'Hide User Details' : 'Click here to See Your User Details'}
//           </button>
//         </div>
        
//         {showDetails && (
//           <div>
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Details:</h2>
//             <div className="overflow-hidden border border-gray-200 rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Property
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Value
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {userDetailsArray.map(([key, value]) => (
//                     <tr key={key}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
//                       <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 break-all">{String(value)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// Dashboard.propTypes = {
//   user: PropTypes.object,
//   onLogout: PropTypes.func.isRequired,
// };

// export default Dashboard;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';

// Import your local images
import dashboardBg from '../../assets/images/LoginPage/loginbanner.png';
import userPhoto from '../../assets/images/demo.jpg'; 

// ====================================================================
// FILE: src/Components/AF_Dashboard/Af_Login_Dashboard.js
// ====================================================================

const Dashboard = ({ user, onLogout }) => {
  const { userId: urlSafeId } = useParams();
  const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

  let userId = '';
  try {
    const encryptedId = decodeURIComponent(urlSafeId);
    const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
    
    // *** THIS IS THE FIX ***
    // We must specify the encoding format (CryptoJS.enc.Utf8) to get a readable string.
    userId = bytes.toString(CryptoJS.enc.Utf8);

  } catch (error) {
    console.error("Failed to decrypt user ID:", error);
    userId = "Error Decrypting ID"; // Show an error on the page
  }

  const [showDetails, setShowDetails] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    onLogout();
  };

  const detailsToDisplay = user && user.user ? user.user : {};
  const userDetailsArray = Object.entries(detailsToDisplay);

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-4xl w-full relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm"
        >
          Logout
        </button>

        <div className="flex items-center justify-center mb-6 space-x-4">
          <img
            src={userPhoto}
            alt="User profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
            <p className="text-gray-600">Welcome, {detailsToDisplay.firstname || 'User'}! (ID: {userId})</p>
          </div>
        </div>

        <div className="my-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2"> WELCOME TO NHSRC</h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {showDetails ? 'Hide User Details' : 'Click here to See Your User Details'}
          </button>
        </div>
        
        {showDetails && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Details:</h2>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userDetailsArray.map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 break-all">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Dashboard;
