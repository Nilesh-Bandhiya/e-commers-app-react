import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" >
            Radhe Collection
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink className="btn btn-outline-light me-1">
                <i className="fa fa-sign-in"></i> Login
              </NavLink>
              <NavLink className="btn btn-outline-light ms-2">
                <i className="fa fa-user-plus"></i> Register
              </NavLink>
              <NavLink className="btn btn-outline-light ms-2">
                <i className="fa fa-shopping-cart"></i> Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
