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

const Signin = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setNotification("Password Mismatch!");
      return;
    }
    const SERVER = new HttpServices("/users/register");
    let Query = await SERVER.post({
      username,
      password,
      email,
      firstname,
      lastname,
    });

    if (!Query.status) {
      if (Query.message.code === 11000) {
        // get the keyValue
        let error = Object.keys(Query.message.keyValue);
        setNotification(`${error[0]} already exists!`);
      } else {
        setNotification("Congratulations! Your account has been created!!");
      }
    }

    // setNotification(Query.message.code);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="p-5">
              <img
                src="./images/signin.svg"
                alt="login"
                className="img-fluid p-5"
              />
            </div>
          </div>
          <div className="col-md-5 form">
            <div className="card p-3">
              <div className="card-body">
                <h1 lassName="card-title">Create Account</h1>
                <div className="card-text">
                  <form
                    action=""
                    className="p-2 bg-white"
                    onSubmit={createAccount}
                  >
                    <div className="row">
                      <div className="col-md-6 pt-3">
                        <label>Enter FirstName :</label>
                        <input
                          className="form-control"
                          onChange={({ target: { value } }) =>
                            setFirstname(value)
                          }
                          value={firstname}
                          required
                        />
                      </div>
                      <div className="col-md-6 pt-3">
                        <label>Enter LastName :</label>
                        <input
                          className="form-control"
                          onChange={({ target: { value } }) =>
                            setLastname(value)
                          }
                          value={lastname}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 pt-3">
                        <label>Enter Username</label>
                        <input
                          className="form-control"
                          onChange={({ target: { value } }) =>
                            setUsername(value)
                          }
                          value={username}
                          required
                        />
                      </div>
                      <div className="col-md-6 pt-3">
                        <label>Enter Email</label>
                        <input
                          className="form-control"
                          onChange={({ target: { value } }) => setEmail(value)}
                          value={email}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pt-3">
                        <label>Enter Password</label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={({ target: { value } }) =>
                            setPassword(value)
                          }
                          value={password}
                          required
                        />
                      </div>
                      <div className="col-md-6 pt-3">
                        <label>Repeat Password</label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={({ target: { value } }) =>
                            setPassword2(value)
                          }
                          value={password2}
                          required
                        />
                      </div>
                    </div>
                    {/* !add checkbox here */}
                    <p>{notification}</p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button class="btn btn-primary">Create Account</button>
                    </div>
                    <p className="text-center">
                      Already Registed ? <Link to="/login">Login!</Link>
                    </p>
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
    </div>
  );
};

export default Signin;
