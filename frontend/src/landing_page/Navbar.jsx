import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
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
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " to="/signup" style={{fontSize:"18px"}}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="  nav-link active " to="/about" style={{fontSize:"18px"}}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/product" style={{fontSize:"18px"}}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/pricing" style={{fontSize:"18px"}}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active " to="/support" style={{fontSize:"18px"}}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
