import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/sign.css';

function Sign({ loggedIn, setLoggedIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !userName || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setUserName('');
    setPassword('');
    setLoggedIn(true);
    navigate('/home');
  };
  return (
    <div className='container'>
      {loggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
        <h2 className='header p-4'>Please Sign Up!</h2>
          <p id='hello'>
            Hello {firstName} {lastName}
          </p>
          <form className='form p-2'>
            <div className='form-floating'>
              <input
                className='form-control'
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder='First Name'
              />
              <label
                for='firstName'
                className='form-label'>First Name</label>
            </div>
            <div className='form-floating'>
              <input className='form-control'
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder='Last Name'
              />
              <label
                for='lastName'
                className='form-label'>Last Name</label>
            </div>
            <div className='form-floating'>
              <input className='form-control'
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="username"
                placeholder='Username'
              />
              <label
                for='username'
                className='form-label'>UserName</label>
            </div>

            <div className='form-floating'>
              <input className='form-control'
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder='Password'
              />
              <label
                for='password'
                className='form-label'>Password</label>
            </div>
            <button className='btn btn-warning mx-auto' type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          <p>
            Already have an account? <Link className='link link-warning' to="/login">Login</Link>
          </p>
        </>
      )}
    </div>
  );
}


export default Sign;