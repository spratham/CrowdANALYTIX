import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          EMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">
          Add User
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

// Navbar-2

// import React from "react";
// import {NavLink} from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div className="sad">
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           EMS
//         </Link>

//         <div className="">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link active"exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link active"exact to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link active"exact to="/contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//     </div>
//   );
// };

// export default Navbar;
