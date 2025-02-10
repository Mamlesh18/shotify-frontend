// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Chrome } from 'lucide-react';
import './login-style.css';
import chatterpy_logo from '../../Assets/logo.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/v1/auth/login', { email, password });
      if (response.status === 200) {
        alert('Login successful');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email); 

        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#181818] flex flex-col items-center justify-center">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-[35%]" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#6a0dad]">Login to ChatterPy.ai</h2>
          <p className="text-center text-gray-500">Enter Your credentials to access your account</p>
          <br />
          <img src={chatterpy_logo} alt="ChatterPy Logo" className="mx-auto w-[80px] md:w-[80px] lg:w-[80px] h-auto" />
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="block text-gray-700 text-sm font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              Remember me
            </label>
            <a className="inline-block align-baseline text-sm text-[#6a0dad] hover:text-[#6a0dadac]" href="#">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-[#6a0dad] w-full hover:bg-[#6a0dadac] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center justify-center mb-1">
            <p className="px-4 text-center text-gray-500">Or continue with</p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <button
              className="bg-gray-400 w-full text-gray-700 font-bold focus:shadow-outline hover:bg-gray-300 flex items-center justify-center"
              type="button"
            >
              <Chrome className="w-5 h-9 mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account? <NavLink className="text-[#6a0dad] hover:text-[#6a0dadac]" to="/signup">Sign up</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
