import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/sign.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Sign({ loggedIn, setLoggedIn, setFirstName, setLastName, setIsAdmin }) {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => setShowModal(false);
  

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

  const handleDropDownChange = (e) => {
    setAdmin(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstNameInput || !lastNameInput || !userName || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    // Show the modal
    setShowModal(true);
  };

  return (
    <div className='container'>
      {loggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
          <h2 className='header p-4'>Please Sign Up!</h2>
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
            <div id='dropdown' className='form-floating mt-3 w-50'>
              <select
                className='form-select'
                value={admin}
                name="admin"
                onChange={handleDropDownChange}
              >
                <option value="">Select Admin Status</option>
                <option value="true">Admin</option>
                <option value="false">Not Admin</option>
              </select>
              <label htmlFor='admin' className='form-label'>Admin</label>
            </div>

            <Button className="btn btn-warning mx-auto" type="submit">
              Submit
            </Button>
          </form>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome, {firstNameInput} {lastNameInput}!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You have successfully signed up.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                handleClose();
                setFirstName(firstNameInput);
                setLastName(lastNameInput);
                setLoggedIn(true);
                setIsAdmin(true);
                navigate('/home');
              }}>
                Continue
              </Button>
            </Modal.Footer>
          </Modal>

          <p>
            Already have an account? <Link className='link link-warning' to="/login">Login</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Sign;
