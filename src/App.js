
// import React, { useState } from 'react';
//  import './index.css';

// // Import all the final components for the webpage
// import Navbar from './Components/HomePage/Navbar'; // Import the Navbar component
// import InfoSection from './Components/HomePage/InfoSection';
// import LoginDashboard from './Components/AF_Dashboard/Af_Login_Dashboard';
// import StepsSection from './Components/HomePage/StepsSection';
// import InnovationAreas from './Components/HomePage/InnovationAreas';
// import FAQandGallery from './Components/HomePage/FAQandGallery';
// import LogoScroller from './Components/HomePage/LogoScroller';
// import Footer from './Components/HomePage/Footer';
// import HeroBanner from './Components/HomePage/HeroBanner'; // Import the HeroBanner component
// import PreNavbarHeader from './Components/HomePage/PreNavbarHeader'; // Import the PreNavbarHeader component 
// import LoginModal from './Components/LoginModule/LoginModal'; // Import the LoginModal component

// /**
//  * This is the main App component.
//  * Its only job is to render the other components in the correct order
//  * to build the complete homepage.
//  */
// function App() {
//    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//    const [isAuthenticated, setIsAuthenticated] = useState(false);
//    const [userDetails, setUserDetails] = useState(null);

//   const handleLoginSuccess = (data) => {
//   setUserDetails(data);      // Save the user data
//   setIsAuthenticated(true);  // Set the user as logged in
//   setLoginModalOpen(false);  // Close the login pop-up
// };
// //handleLogout: This function will be called from the Dashboard to reset everything.
//   const handleLogout = () => {
    
//     setUserDetails(null); 
//     setIsAuthenticated(false);
//   }; 
//       // Clear the user data
// // If the user is logged in...
//   if (isAuthenticated) {
//     // ...show the Dashboard page.
//     return <LoginDashboard user={userDetails} onLogout={handleLogout} />;
//   }



//   return (
//     <div className="bg-gray-50 font-sans">
//       {/* The top navigation bar */}
//       <PreNavbarHeader />
      
//         <Navbar onLoginClick={() => setLoginModalOpen(true)} />
//       {/* The main navigation bar */}
//       <LoginModal 
//         isOpen={isLoginModalOpen} 
//         onClose={() => setLoginModalOpen(false)}
//       />
      
//       {/* The main content area of the page */}
//       <main>
//         {/* We are missing a hero/slider for this version, 
//             but if you had one, it would go right after the Navbar. */}
//             <HeroBanner />
//         <InfoSection />
//         <StepsSection />
//         <InnovationAreas />
//         <FAQandGallery />
//         <LogoScroller />
//       </main>

//       {/* The footer at the bottom of the page */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './index.css';

// // Import all the components needed for the application
// import Navbar from './Components/HomePage/Navbar';
// import InfoSection from './Components/HomePage/InfoSection';
// import StepsSection from './Components/HomePage/StepsSection';
// import InnovationAreas from './Components/HomePage/InnovationAreas';
// import FAQandGallery from './Components/HomePage/FAQandGallery';
// import LogoScroller from './Components/HomePage/LogoScroller';
// import Footer from './Components/HomePage/Footer';
// import HeroBanner from './Components/HomePage/HeroBanner';
// import PreNavbarHeader from './Components/HomePage/PreNavbarHeader';
// import LoginModal from './Components/LoginModule/LoginModal'; // Import the LoginModal component
// import Dashboard from './Components/AF_Dashboard/Af_Login_Dashboard'; // The new page for logged-in users

// function App() {
//   // State to manage if the login popup is visible
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   // State to track if the user is successfully logged in
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   // State to store the user's details from the API response
//   const [userDetails, setUserDetails] = useState(null);

//   /**
//    * This function is called by the LoginModal after a successful API call.
//    * It receives the user data from the API.
//    */
//   const handleLoginSuccess = (data) => {
//     setUserDetails(data);      // Save the user data
//     setIsAuthenticated(true);  // Set the user as logged in
//     setLoginModalOpen(false);  // Close the login popup
//   };

//   /**
//    * This function is passed to the Dashboard page to handle logging out.
//    */
//   const handleLogout = () => {
//     setUserDetails(null);      // Clear the user data
//     setIsAuthenticated(false); // Set the user as logged out
//   };

//   // --- Main Render Logic ---
//   // If the user is authenticated, we show the Dashboard page.
//   if (isAuthenticated) {
//     return <Dashboard user={userDetails} onLogout={handleLogout} />;
//   }

//   // Otherwise, we show the main homepage.
//   return (
//     <div className="bg-gray-50 font-sans">
//       <PreNavbarHeader />
//       <Navbar onLoginClick={() => setLoginModalOpen(true)} />
//       <HeroBanner />
//       <main>
//         <InfoSection />
//         <StepsSection />
//         <InnovationAreas />
//         <FAQandGallery />
//         <LogoScroller />
//       </main>
//       <Footer />
      
//       {/* The Login Modal is always here, but only visible when isLoginModalOpen is true */}
//       <LoginModal 
//         isOpen={isLoginModalOpen} 
//         onClose={() => setLoginModalOpen(false)} 
//         onLoginSuccess={handleLoginSuccess} 
//       />
      
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './index.css';

// // Import all page components
// import MainNavbar from './Components/HomePage/Navbar';
// import InfoSection from './Components/HomePage/InfoSection';
// import StepsSection from './Components/HomePage/StepsSection';
// import InnovationAreas from './Components/HomePage/InnovationAreas';
// import FAQandGallery from './Components/HomePage/FAQandGallery';
// import LogoScroller from './Components/HomePage/LogoScroller';
// import Footer from './Components/HomePage/Footer';
// import HeroBanner from './Components/HomePage/HeroBanner';
// import PreNavbarHeader from './Components/HomePage/PreNavbarHeader';
// import LoginModal from './Components/LoginModule/LoginModal';
// import Dashboard from './Components/AF_Dashboard/Af_Login_Dashboard';

// // ====================================================================
// // A new component to represent the entire Homepage layout
// // ====================================================================
// const Homepage = ({ onLoginClick }) => {
//   return (
//     <div className="bg-gray-50 font-sans">
//       <PreNavbarHeader />
//       <MainNavbar onLoginClick={onLoginClick} />
//       <HeroBanner />
//       <main>
//         <InfoSection />
//         <StepsSection />
//         <InnovationAreas />
//         <FAQandGallery />
//         <LogoScroller />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // ====================================================================
// // The main App component, now acting as a router
// // ====================================================================
// function App() {
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);

//   const handleLoginSuccess = (data) => {
//     setUserDetails(data);
//     setIsAuthenticated(true);
//     setLoginModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUserDetails(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* The Login Modal is placed here so it can appear on top of any page */}
//       <LoginModal 
//         isOpen={isLoginModalOpen} 
//         onClose={() => setLoginModalOpen(false)} 
//         onLoginSuccess={handleLoginSuccess} 
//       />

//       <Routes>
//         {/* Route 1: The Homepage */}
//         <Route 
//           path="/" 
//           element={<Homepage onLoginClick={() => setLoginModalOpen(true)} />} 
//         />

//         {/* Route 2: The Dashboard */}
//         {/* This route is protected. It only shows the Dashboard if the user is authenticated. */}
//         {/* Otherwise, it redirects them back to the homepage. */}
//         <Route 
//           path="/dashboard" 
//           element={
//             isAuthenticated ? (
//               <Dashboard user={userDetails} onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" />
//             )
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './index.css';

// // Import all page components from their correct folders
// import Navbar from './Components/HomePage/Navbar'; // Corrected to MainNavbar if that's the final version
// import InfoSection from './Components/HomePage/InfoSection';
// import StepsSection from './Components/HomePage/StepsSection';
// import InnovationAreas from './Components/HomePage/InnovationAreas';
// import FAQandGallery from './Components/HomePage/FAQandGallery';
// import LogoScroller from './Components/HomePage/LogoScroller';
// import Footer from './Components/HomePage/Footer';
// import HeroBanner from './Components/HomePage/HeroBanner';
// import PreNavbarHeader from './Components/HomePage/PreNavbarHeader';
// import LoginModal from './Components/LoginModule/LoginModal';
// import Dashboard from './Components/AF_Dashboard/Af_Login_Dashboard';

// // ====================================================================
// // A new component to represent the entire Homepage layout
// // ====================================================================
// const Homepage = ({ onLoginClick }) => {
//   return (
//     <div className="bg-gray-50 font-sans">
//       <PreNavbarHeader /> 
//       <Navbar onLoginClick={onLoginClick} />
//       <HeroBanner />
//       <main>
        
//         <InfoSection />
//         <StepsSection />
//         <InnovationAreas />
//         <FAQandGallery />
//         <LogoScroller />
//       </main>
//       <Footer />
//     </div>
//   );
// };


// function App() {
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);

//   const handleLoginSuccess = (data) => {
//     setUserDetails(data);
//     setIsAuthenticated(true);
//     setLoginModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUserDetails(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* The Login Modal is placed here so it can appear on top of any page */}
//       <LoginModal 
//         isOpen={isLoginModalOpen} 
//         onClose={() => setLoginModalOpen(false)} 
//         onLoginSuccess={handleLoginSuccess} 
//       />

//       <Routes>
//         {/* Route 1: The Homepage */}
//         <Route 
//           path="/" 
//           element={<Homepage onLoginClick={() => setLoginModalOpen(true)} />} 
//         />

//         {/* Route 2: The Dashboard */}
//         {/* This route is protected. It only shows the Dashboard if the user is authenticated. */}
//         {/* Otherwise, it redirects them back to the homepage. */}
//         <Route 
//           path="/dashboard" 
//           element={
//             isAuthenticated ? (
//               <Dashboard user={userDetails} onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" />
//             )
//           } 
//         />
//       </Routes>
//     </Router> 
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './index.css';

// // Import all page components from their correct folders
// import MainNavbar from './Components/HomePage/Navbar';
// import InfoSection from './Components/HomePage/InfoSection';
// import StepsSection from './Components/HomePage/StepsSection';
// import InnovationAreas from './Components/HomePage/InnovationAreas';
// import FAQandGallery from './Components/HomePage/FAQandGallery';
// import LogoScroller from './Components/HomePage/LogoScroller';
// import Footer from './Components/HomePage/Footer';
// import HeroBanner from './Components/HomePage/HeroBanner';
// import PreNavbarHeader from './Components/HomePage/PreNavbarHeader';
// import LoginModal from './Components/LoginModule/LoginModal';
// import Dashboard from './Components/AF_Dashboard/Af_Login_Dashboard';

// // ====================================================================
// // A new component to represent the entire Homepage layout
// // ====================================================================
// const Homepage = ({ onLoginClick }) => {
//   return (
//     <div className="bg-gray-50 font-sans">
//       <PreNavbarHeader />
//       <MainNavbar onLoginClick={onLoginClick} />
//       <HeroBanner />
//       <main>
//         <InfoSection />
//         <StepsSection />
//         <InnovationAreas />
//         <FAQandGallery />
//         <LogoScroller />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // ====================================================================
// // The main App component, now acting as a router
// // ====================================================================
// function App() {
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userDetails, setUserDetails] = useState(null);

//   const handleLoginSuccess = (data) => {
//     setUserDetails(data);
//     setIsAuthenticated(true);
//     setLoginModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUserDetails(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       {/* The Login Modal is placed here so it can appear on top of any page */}
//       <LoginModal 
//         isOpen={isLoginModalOpen} 
//         onClose={() => setLoginModalOpen(false)} 
//         onLoginSuccess={handleLoginSuccess} 
//       />

//       <Routes>
//         {/* Route 1: The Homepage */}
//         <Route 
//           path="/" 
//           element={<Homepage onLoginClick={() => setLoginModalOpen(true)} />} 
//         />

//         {/* Route 2: The Dashboard (Updated with dynamic :userId) */}
//         {/* The path now includes a variable part for the user's ID. */}
//         <Route 
//           path="/dashboard/:userId" 
//           element={
//             isAuthenticated ? (
//               <Dashboard user={userDetails} onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" />
//             )
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
//
// Import all page components from their correct folders
import MainNavbar from './Components/HomePage/Navbar';
import InfoSection from './Components/HomePage/InfoSection';
import StepsSection from './Components/HomePage/StepsSection';
import InnovationAreas from './Components/HomePage/InnovationAreas';
import FAQandGallery from './Components/HomePage/FAQandGallery';
import LogoScroller from './Components/HomePage/LogoScroller';
import Footer from './Components/HomePage/Footer';
import HeroBanner from './Components/HomePage/HeroBanner';
import PreNavbarHeader from './Components/HomePage/PreNavbarHeader';
import LoginModal from './Components/LoginModule/LoginModal';
import Dashboard from './Components/AF_Dashboard/Af_Login_Dashboard';

// ====================================================================
// A component to represent the entire Homepage layout
// ====================================================================
const Homepage = ({ onLoginClick }) => {
  return (
    <div className="bg-gray-50 font-sans">
      <PreNavbarHeader />
      <MainNavbar onLoginClick={onLoginClick} />
      <HeroBanner />
      <main>
        <InfoSection />
        <StepsSection />
        <InnovationAreas />
        <FAQandGallery />
        <LogoScroller />
      </main>
      <Footer />
    </div>
  );
};

// ====================================================================
// The main App component, now acting as a router
// ====================================================================
function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleLoginSuccess = (data) => {
    setUserDetails(data);
    setIsAuthenticated(true);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUserDetails(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* The Login Modal is placed here so it can appear on top of any page */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />

      <Routes>
        {/* Route 1: The Homepage */}
        <Route 
          path="/" 
          element={<Homepage onLoginClick={() => setLoginModalOpen(true)} />} 
        />

        {/* Route 2: The Dashboard */}
        <Route 
          path="/dashboard/:userId" 
          element={
            isAuthenticated ? (
              <Dashboard user={userDetails} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;