import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/sign.css';

function Sign({ loggedIn, setLoggedIn, setFirstName, setLastName }) {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstNameInput(value);
        break;
      case 'lastName':
        setLastNameInput(value);
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
    if (!firstNameInput || !lastNameInput || !userName || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Hello ${firstNameInput} ${lastNameInput}`);
    setFirstName(firstNameInput);
    setLastName(lastNameInput);
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
            Hello {firstNameInput} {lastNameInput}
          </p>
          <form className='form w-50 p-2' onSubmit={handleFormSubmit}>
            <div className='form-floating'>
              <input
                className='form-control'
                value={firstNameInput}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder='First Name'
              />
              <label
                htmlFor='firstName'
                className='form-label'>First Name</label>
            </div>
            <div className='form-floating'>
              <input className='form-control'
                value={lastNameInput}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder='Last Name'
              />
              <label
                htmlFor='lastName'
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
                htmlFor='userName'
                className='form-label'>Username</label>
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
                htmlFor='password'
                className='form-label'>Password</label>
            </div>
            <button className='btn btn-warning mx-auto' type="submit">
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
