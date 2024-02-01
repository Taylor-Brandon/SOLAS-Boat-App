import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

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
    <div>
      {loggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
          <p>
            Hello {firstName} {lastName}
          </p>
          <form className='form'>
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder='First Name'
            />
            <input
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder='Last Name'
            />
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
              type="text"
              placeholder='Password'
            />
            <input
              checked={isAdmin}
              name="isAdmin"
              type="checkbox"
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleFormSubmit}>
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