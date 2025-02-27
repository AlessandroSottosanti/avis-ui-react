import React from "react";
import { NavLink } from "react-router-dom";

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003D73" }}>
      <div className="container-fluid d-flex align-items-center">
        <NavLink className="navbar-brand" to="/">
          <div className="img-container d-flex justify-content-center align-items-center m-0 ">
            <img className="d-flex" src={`/goccia-logo.png`} alt="AVIS Logo" />
          </div>
          <strong>AVIS</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Chi Siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/donatores">
                Donatori
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
