import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
           <img src="./images/llogo.png" className="img-fluid" style={{width:"50px", height:"50px"}}/>
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
                <a class="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signin">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
