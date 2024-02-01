import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './home';


function Sign({ loggedIn, setLoggedIn }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');


  const navigate = useNavigate(); 
  const mockAuthenticate = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       
        resolve({ success: true, isAdmin: isAdmin });
      }, 1000); 
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setIsAdmin(checked);
    } else {
      switch (name) {
        case 'userName':
          setUserName(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mockAuthenticate();

      if (response.success) {
       
        setLoggedIn(true);
        navigate('/home'); 
      } else {
       
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Error occurred during login');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Navigate to="/home" /> // Redirect to home if already logged in
      ) : (
        <>
          <p>
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </p>
          <form className='form'>
            {/* Other input fields */}
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder='Username'
            />
            <input
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder='Password'
            />
            {/* Other input fields */}
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
         
        </>
      )}
    </div>
  );
}

export default Sign;
