import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/log.css';

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
    if (!userName || !password) {
      alert('Please fill in all required fields.');
      return;
    }
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
        <Navigate to="/home" /> 
      ) : (
        <>
          <p>
            {error && <span style={{ color: 'red' }}>{error}</span>}
          </p>
          <h2 className='header'>Login</h2>
          <form className='form w-25 p-2'>
            <div className='form-floating'>
            <input
            className='form-control'
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder='Username'
            />
            <label className='form-label' for='userName'>Username</label>
            </div>
            <div className='form-floating'>
            <input
            className='form-control'
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder='Password'
            />
            <label className='form-label' for='password'>Password</label>
            </div>
            <button className='btn btn-warning' type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
         
        </>
      )}
    </div>
  );
}

export default Sign;
