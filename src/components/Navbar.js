import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {

 const totalQuantity = useSelector(state=> state.cart.totalQuantity)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-body-tertiary py-2">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4">
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
              <li className="nav-item mx-1">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink to="contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-light me-1">
                <i className="fa fa-sign-in"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-light ms-2">
                <i className="fa fa-user-plus"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-light ms-2">
                Cart <span className="badge text-bg-light">{totalQuantity}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
