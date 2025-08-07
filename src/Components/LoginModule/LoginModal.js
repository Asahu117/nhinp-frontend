
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'; // Import the crypto library



// Import your local images
import nhipLogo from '../../assets/images/LoginPage/cropped-logoright-1.png';
import modalBgImage from '../../assets/images/LoginPage/loginbanner.png';

// ====================================================================
// FILE: src/Components/LoginModule/LoginModal.js
// ====================================================================

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 1; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captchaText);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== generatedCaptcha) {
      alert('Invalid Captcha. Please try again.');
      generateCaptcha();
      setCaptcha('');
      return;
    }

    try {
      const response = await fetch('/api/loginreact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier, password: password }),
      });

      if (!response.ok) {
        alert('Login failed. Please check your credentials.');
        generateCaptcha();
        return;
      }

      const userDetails = await response.json();
      onLoginSuccess(userDetails);
      
      if (userDetails && userDetails.user && userDetails.user.id) {
        const userId = userDetails.user.id.toString(); // Convert ID to string for encryption
        const secretKey = process.env.REACT_APP_ENCRYPTION_KEY;

        // 1. Encrypt the user ID
        const encryptedId = CryptoJS.AES.encrypt(userId, secretKey).toString();

        // 2. Make the encrypted string URL-safe
        const urlSafeId = encodeURIComponent(encryptedId);
        
        // 3. Navigate using the encrypted ID
        navigate(`/dashboard/${urlSafeId}`);
      } else {
        console.error("User ID not found in API response.");
        alert("Login successful, but could not redirect. User ID is missing.");
      }

    } catch (error) {
      console.error("API Error:", error);
      alert("An error occurred while trying to log in.");
      generateCaptcha();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl flex w-full max-w-4xl overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <img src={modalBgImage} alt="Healthcare background" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
          <img src={nhipLogo} alt="NHIP Logo" className="h-8 mb-6" />
          <h2 className="text-2xl font-bold mb-1">Login</h2>
          <p className="text-sm text-gray-500 mb-6">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register here.</a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="identifier">Email / User ID *</label>
              <input 
                type="text" 
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Email or User ID"
                required 
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password *</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 top-6 px-3 flex items-center text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="captcha">Captcha *</label>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 select-none flex-grow text-center">
                  <span className="text-lg font-bold tracking-widest" style={{ fontFamily: 'monospace', textDecoration: 'line-through', fontStyle: 'italic' }}>
                    {generatedCaptcha}
                  </span>
                </div>
                <button type="button" onClick={generateCaptcha} className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M20 4h-5v5M4 20h5v-5" />
                  </svg>
                </button>
              </div>
              <input 
                type="text" 
                id="captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Captcha"
                required 
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-[#1e2a4a] text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90">
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginModal;
