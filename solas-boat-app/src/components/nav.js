import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navigation({ userNameInput, isAdminString }) {
  console.log(userNameInput);
  return (
    <div className="navbar">
      <button
        id="toggle-btn"
        className="navbar-toggler bg-warning p-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Navigation
          </h5>
          <h5 id="userNameInput">Username: {userNameInput}</h5>
          <h5 id="adminRole">Role: {isAdminString}</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link id="homeLink" className="searchLink" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link id="pdfLink" className="pdfLink" to="/pdf">
                PDF
              </Link>
            </li>
            <li>
              <button className="btn btn-warning">Add Data</button>
            </li>
            <li>
              <button className="btn btn-warning">Adjust Roles</button>
            </li>
            <li>
              <button id="password" className="btn btn-warning">
                Change Password
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
