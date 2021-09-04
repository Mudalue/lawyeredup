import { Menu } from "@material-ui/core";
import React from "react";


const LawyerNavbar = () => {
  return (
    <div>
      <nav class="navbar sticky-top  navbar-expand-lg  p-3 ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img
              src="./images/llogo.png"
              className="img-fluid"
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
          </a>
          {/* <a class="navbar-brand " href="#">
              <h4 className="text-center">ParkWell</h4>
            </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <Menu className="text-light" />
            </span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            {/* <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    
                       
                        <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-circle "
                    height="25"
                    alt=""
                    loading="lazy"
                  />
                    
                  
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}
            {/* <Link to="/parking" class="navbar-brand ">
                  <a class="nav-link active text-center" aria-current="page">
                    Home
                  </a>
                </Link>
                
                <Link to="/contact-us" class="navbar-brand ">
                  <a className="text-center">Contact</a>
                </Link>
                <a class="nav-link" href="#">
                  About Us
                </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LawyerNavbar;
