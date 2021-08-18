import React from "react";
import Navbar from "./Navbar";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
  Twitch,
} from "react-feather";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="p-5">
              <img
                src="./images/login.svg"
                alt="login"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-5 form">
            <div className="card p-2">
              <div className="card-body">
                <h1 lassName="card-titl">Login</h1>
                <div className="card-text">
                  <form action="" className="p-3">
                    <div className="row">
                      <div className="col-md-12 pt-3">
                        <label>Enter Username</label>
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pt-3">
                        <label>Enter Password</label>
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 py-3">
                        <div>
                          <button className="btn btn-md btn-success">
                            Login now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="d-flex justify-content-between p-4 bgk-blue">
        <div class="me-5">
          <span className="text-white">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" class="text-white me-4">
            <Facebook />
          </a>
          <a href="" class="text-white me-4">
            <Twitter />
          </a>
          <a href="" class="text-white me-4">
            <Twitch />
          </a>
          <a href="" class="text-white me-4">
            <Instagram />
          </a>
          <a href="" class="text-white me-4">
            <Linkedin />
          </a>
          <a href="" class="text-white me-4">
            <GitHub />
          </a>
        </div>
      </section>
      <section></section>
      <div className="footer bg-dark">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
