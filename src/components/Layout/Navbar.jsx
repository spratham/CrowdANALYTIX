import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          EMS
        </Link>
       
        <div className="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"exact to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active"exact to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active"exact to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
