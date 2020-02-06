// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
            <nav className="navbar navbar-dark" id='navbarhomescreen'>
                <div className="container">
                <Link to="/" className="navbar-brand"><img src="./images/truck.png" alt="logo" id="navbarlogo"/></Link>
                <ul className="nav navbar-nav flex-row float-left">

                    <li className="nav-item navbutton">
                    {!isAuthenticated && (
                      <button className ='loginbutton' onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    </li>
                    
                    {isAuthenticated &&(
                      <span>
                        <Link to="/postpickups"><li className="nav-item navbutton mr-3 navigationlinks">Post a Pick Up</li></Link>
                      </span>
                    )}

                    {isAuthenticated &&(
                      <span>
                        <Link to="/jobs"><li className="nav-item navbutton mr-3 navigationlinks">Claim a Job</li></Link>
                      </span>
                    )}

                    {isAuthenticated &&(
                      <span>
                        <Link to="/currentjobs"><li className="nav-item navbutton mr-3 navigationlinks">Current Jobs</li></Link>
                      </span>
                    )}

                    <li className="nav-item navbutton">
                      {isAuthenticated && <button className="logoutbutton" onClick={() => logout()}>Log out</button>}
                    </li>

                </ul>
                </div>
            </nav>
    </div>
  );
};

export default NavBar;