import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

import chatterpy_logo from '../../Assets/logo.png';
import { Chrome } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [username, setUsername] = useState("");

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  

  const handleSubmitCredentials = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!agreeTerms) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/v1/auth/signup', {
        email: email,
        password: password
      });
  
      if (response.status === 200) {
        const { token } = response.data;
  
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
  
        alert("Credentials saved successfully!");
        navigate('/'); 
      }
    } catch (error) {
      alert("Error saving credentials");
      console.error("Error saving credentials:", error);
    }
  };

  return (
    <>
    <div className="mt-[0px] ">
       <div className="min-h-screen bg-[#181818] flex flex-col items-center justify-center">
  
      
        {otpVerified && ( 
          <div className="w-[35%] bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 ">
             <h2 className="text-2xl font-bold mb-4 text-center text-[#6a0dad]">Create an Account</h2>
                      <p className="text-center text-gray-500">Join us today and get started</p>
                      <br />
                      <img src={chatterpy_logo} alt="ChatterPy Logo" className="mx-auto w-[80px] md:w-[80px] lg:w-[80px] h-auto" />
           <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <input
                  type="checkbox"
                  className="mr-2 leading-tight"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                I agree to the terms and conditions
              </label>
            </div>
            <NavLink to="/login">
              <button className="mt-8 bg-[#6a0dad] w-full hover:bg-[#6a0dadac] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmitCredentials}>Create Account</button>
            </NavLink><div className="flex items-center justify-center mb-1">
            <p className="px-4 text-center text-gray-500">Or continue with</p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <button
              className="bg-gray-400 w-full text-gray-700 font-bold focus:shadow-outline hover:bg-gray-300 flex items-center justify-center"
              type="button"
            >
              <Chrome className="w-5 h-9 mr-2" />
              Sign up with Google
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account? <NavLink className="text-[#6a0dad] hover:text-[#6a0dadac]" to="/login">Sign In</NavLink>
          </p>
          </div>
          
        )}
      </div>
      {errorMessage && <p className="text-red0-500 text-[1rem] mt-[10px]">{errorMessage}</p>}
      
    </div>
    
    </>
  );
};

export default Signup;
