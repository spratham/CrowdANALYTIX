import React from "react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParam } from "react-router-dom";

import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate(); //Redirecting or navigating purpose(previously know as useHistory)
  const { id } = useParam();
  const [user, setUser] = useState({
    name: "",
    age: "",
    department: "",
    blood: "",
    address: "",
  });

  const { name, age, department, blood, address } = user; //destructuring
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault(); //preventing from stucking with data on input fields after submiting the form
    await axios.put(`http://localhost:3003/users/${id}`, user); //Post location depend's upon ID
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data); //  loading the data in form to edit
    console.log(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="department"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="department"
              value={department}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Blood Group"
              name="blood"
              value={blood}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your address Name"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
