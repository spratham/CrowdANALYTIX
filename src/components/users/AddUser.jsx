import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate(); //Redirecting or navigating purpose(previously know as useHistory)

  const [user, setUser] = React.useState({
    name: "",
    age: "",
    department: "",
    blood: "",
    address: "",
    phone: "",
  });

  const { name, age, department, blood, address, phone } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); //preventing from stucking with data on input fields after submiting the form
    await axios.post("http://localhost:3003/users", user); //Post location
    navigate("/");
  };

  return (
    <div>
      {/* Breadcrumb Start */}

      <nav className="breadcrumb-nav m-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="navbar-brands " to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            Add User
          </li>
        </ol>
      </nav>

      {/* Breadcrumb End */}

      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center my-2">Add User Data</h2>

          {/* From Start */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-group my-2">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Blood Group"
                name="blood"
                value={blood}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="address"
                className="form-control form-control-lg"
                placeholder="Enter Address "
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-group my-2">
              <input
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="tel"
                className="form-control form-control-lg"
                placeholder="Enter Contact No "
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <button
              type="submit"
              className="d-block mx-auto btn btn-primary btn-block"
            >
              Add User
            </button>
          </form>
          {/* Form End */}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
