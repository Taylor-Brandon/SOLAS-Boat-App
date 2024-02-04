import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/sign.css';

function Sign({ loggedIn, setLoggedIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setIsAdmin(checked);
    } else {
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
    setIsAdmin(false);
    setLoggedIn(true);
    navigate('/home');
  };
  return (
    <div className='container'>
      {loggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
        <h1 className='header p-4'>Please Sign Up!</h1>
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
                type="text"
                placeholder='Username'
              />
              <label
                for='userName'
                className='form-label'>Username</label>
            </div>
            <div className='form-floating'>
              <input className='form-control'
                value={password}
                name="password"
                onChange={handleInputChange}
                type="text"
                placeholder='Password'
              />
              <label
                for='username'
                className='form-label'>Password</label>
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label'>Admin</label>
              <input className='form-check-input'
                checked={isAdmin}
                name="isAdmin"
                type="checkbox"
                onChange={handleInputChange}
              />
            </div>
            <button className='btn btn-primary' type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </>
      )}
    </div>
  );
}


export default Sign;