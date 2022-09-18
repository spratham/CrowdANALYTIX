import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="sad">
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          EMS
        </NavLink>
       
        <div className="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active"exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active"exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active"exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    {/* <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="images/logo.png" /></a>
          <NavLink
            className="navbar-toggler"
            type="Link"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link active"exact to="/">
                Home
              </NavLink>
                
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active"exact to="/about">
                About
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active"exact to="/contact">
                Contact
              </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
