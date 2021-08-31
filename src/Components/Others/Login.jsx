import React, { useState } from "react";
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
import HttpServices from "./../../Util/HttpServices";
import { Link } from "react-router-dom";
import Storage from "../../Util/LocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();
    setNotification("Checking Your Credentials");
    const res_ = new HttpServices("/users/login");
    let result = await res_.post({ email, password });
    // setNotification(result.message);
    if (result.status)
      !result.data.length && setNotification("Invalid Credentials!!!");
    if (result.status) {
      if (result.data.length) {
        setNotification("Login Successful!");
        let { username, firstname, lastname, email } = result.data[0];
        // localstorage
        const STORAGE = new Storage({ username, firstname, lastname, email });
        STORAGE.createStorage();
        // redirect
        window.location = "/";
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="p-5">
              <img src="./images/login.svg" alt="login" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-5 form">
            <div className="card p-2">
              <div className="card-body">
                <h1 lassName="card-titl">LOGIN</h1>
                <div className="card-text">
                  <form action="" className="p-3" onSubmit={submitLogin}>
                    <div className="row">
                      <div className="col-md-12 pt-3">
                        <label>Enter Email</label>
                        <input
                          className="form-control"
                          defaultValue={email}
                          required
                          onChange={({ target: { value } }) => setEmail(value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pt-3">
                        <label>Enter Password</label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue={password}
                          required
                          onChange={({ target: { value } }) =>
                            setPassword(value)
                          }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 py-3">
                        <p className="text-alert text-center">{notification}</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                          <button class="btn btn-primary">Login</button>
                        </div>
                      </div>
                    </div>
                    <p className="text-center">
                      Not Registered?{" "}
                      <Link to="/joinus">Create Your Free Account!</Link>
                    </p>
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
