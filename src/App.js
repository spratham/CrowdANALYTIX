import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Layout/Navbar";
import AddUser from "./components/users/AddUser";
import DeleteUser from "./components/users/DeleteUser";
import EditUser from "./components/users/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
function App() {
  return (<>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUser/>} />
          <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/users/:id" element={<DeleteUser/>} />  
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </div>
    </Router>
 
    </>
  );
}

export default App;
