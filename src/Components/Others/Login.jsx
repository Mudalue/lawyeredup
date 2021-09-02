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
      <section className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="pt-5 text-center">
              <img
                src="./images/login.svg"
                alt="login"
                className="img-fluid"
                style={{width: "450px", height:"450px"}}
              />
            </div>
          </div>
          <div className="col-md-6 form">
            <div className="card ">
              <div className="card-body">
                <h1 lassName="card-title" style={{fontSize:"20px"}}>Login</h1>
                <div className="card-text">
                  <form action="" className="px-5">
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
                          <button className="btn btn-md btn-success py-2" style={{width: "100%"}}>
                            Login
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
      <section class="d-flex justify-content-between p-4 bgk-blue b4footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-wrap justify-content-between">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <div className="footer bg-dark">
        <Footer />
      </div>
      </section>
     
    </div>
  );
};

export default Login;
