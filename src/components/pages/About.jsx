import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Breadcrumb Start */}
      <nav className="breadcrumb-nav m-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="navbar-brands " to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
      {/* Breadcrumb End */}
      <div className="container">
        <div className="py-4"></div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          incidunt officia voluptas, ut itaque officiis ipsam sapiente omnis
          exercitationem, tempora voluptatibus, laboriosam temporibus dolore
          iusto ex repudiandae nisi harum quibusdam. Odit quaerat suscipit, illo
          eveniet voluptatibus nostrum quas doloribus eos fuga accusamus
          obcaecati sapiente tempora animi quasi. Quas alias assumenda ipsam nam
          dolorum asperiores ullam, voluptatum omnis sunt saepe totam.
        </p>
      </div>
    </>
  );
};

export default About;
