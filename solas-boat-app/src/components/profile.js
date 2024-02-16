import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/nav";
import "../styles/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile({ firstName, lastName, isAdmin, userNameInput }) {
  console.log(isAdmin);

  const isAdminString = isAdmin ? "Admin" : "Not Admin";

  return (
    <div className="container">
      {!isAdmin ? (
        <>
          <div className="bg-image">
            <div className="bd-text"></div>
          </div>
          <h1 className="welcomeProfile">
            Welcome {firstName} {lastName}
          </h1>
          <Link className="logOut" to="/">
            Logout
          </Link>
        </>
      ) : (
        <>
          <div className="bg-image">
            <div className="bg-text"></div>
          </div>
          <h1 className="welcomeProfile">
            Welcome {firstName} {lastName}
          </h1>
          <Link className="logOut" to="/">
            Logout
          </Link>
          <Navigation
            isAdminString={isAdminString}
            userNameInput={userNameInput}
          />
        </>
      )}
    </div>
  );
}

export default Profile;
