import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  function handleEnter(event) {
    if (event.key === "Enter") {
      const form = document.getElementById("form");
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      //event.preventDefault();
    }
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User Data</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="department"
              className="form-control form-control-lg"
              placeholder="Enter department"
              name="department"
              value={department}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Blood Group"
              name="blood"
              value={blood}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Address "
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Contact No "
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
              onkeydown={handleEnter}
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
