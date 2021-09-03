import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="./images/llogo.png"
              className="img-fluid"
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/About-us">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/joinus">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
