import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const Home = () => {
  const pageSize = 5;
  const [users, setUser] = useState([]);
  const [paginateUsers, setPaginateUsers] = useState();
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3003/users");
      console.log(response);
      setUser(response.data.reverse()); //using reverse to view new added user on top
      setPaginateUsers(_(response.data).slice(0).take(pageSize).value());
    } catch {
      console.log("error");
    }
  };

  // DELETE request using axios with async/await
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);

    loadUsers();
    alert("deleted");
  };

  // Pagination

  const pageCount = users ? Math.ceil(users.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginateUsers = _(users).slice(startIndex).take(pageSize).value();
    setPaginateUsers(paginateUsers);
  };
  return (
    <div>
      {!users ? (
        "no data found"
      ) : (
        <div className="container">
          <div className="py-4">
            <div className="heading">
              <h1>Home Page</h1>
              <Link className="add-user" exact to="/users/add">
                ADD+
              </Link>
            </div>

            {/* {

         -----Card format view----

      
          users && users.map((user,index) => (               
            <div className="Profile">
              <p>{index+1}</p>                              
              <p>{user.name}</p>
              <p>{user.age}</p>             
              <p>{user.department}</p>
              <p>{user.blood}</p>
              <p>{user.address}</p>
              <p>{user.phone}</p>
              <br/>
            </div >
          ))} */}

            {/* -----for Table format view---- */}

            <table className="table table-success table-striped border shadow">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Department</th>
                  <th scope="col">Blood Grp</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {paginateUsers?.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.department}</td>
                    <td>{user.blood}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link
                        className="btn btn-primary my-1 edit"
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <nav aria-label="...">
              <ul className="pagination pagination-md">
                {pages.map((page) => (
                  <li className="page-item ">
                    < button className="page-link" onClick={() => pagination(page)}>
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
