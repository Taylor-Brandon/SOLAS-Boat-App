import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../styles/sign.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

function Sign() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    admin : false,
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDropDownChange = (e) => {
    setFormState({
      ...formState,
      admin: e.target.value === 'true',
    });
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    try{
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
      setShowModal(true);
      setLoggedIn(true);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
  };

  return (
    <div className="container">
      {loggedIn ? (
        <Navigate to="/home" />
      ) : (
        <>
          <h2 className="header p-4">Please Sign Up!</h2>
          {showAlert && ( 
            <Alert
              id="alert"
              variant="warning"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Please fill in all required fields.
            </Alert>
          )}
          <form className="form w-50 p-2" onSubmit={handleFormSubmit}>
            <div className="form-floating">
              <input
                className="form-control"
                value={formState.firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First Name"
              />
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                value={formState.lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
              />
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                value={formState.email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
              />
              <label htmlFor="Email" className="form-label">
                Email
              </label>
            </div>

            <div className="form-floating">
              <input
                className="form-control"
                value={formState.password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div id="dropdown" className="form-floating mt-3 w-50">
              <select
                className="form-select"
                value={formState.admin}
                name="admin"
                onChange={handleDropDownChange}
              >
                <option value="">Select Admin Status</option>
                <option value="true">Admin</option>
                <option value="false">Not Admin</option>
              </select>
              <label htmlFor="admin" className="form-label">
                Admin
              </label>
            </div>

            <Button className="btn btn-warning mx-auto" type="submit">
              Submit
            </Button>
          </form>

          <Modal id="modal" show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Welcome, {formState.firstName} {formState.lastName}!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>You have successfully signed up.</Modal.Body>
            <Modal.Footer>
              <Button
                className="btn btn-warning"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="btn btn-warning"
                variant="primary"
                onClick={() => {
                  handleClose();
                  setLoggedIn(true);
                  navigate("/home");
                }}
              >
                Continue
              </Button>
            </Modal.Footer>
          </Modal>

          <p>
            Already have an account?{" "}
            <Link className="link link-warning" to="/login">
              Login
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Sign;