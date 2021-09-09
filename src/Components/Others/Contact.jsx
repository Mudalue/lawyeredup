import React from "react";
import { Send } from "react-feather";
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

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="contactsection bg-dark text-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-">
              <div className="text-center p-5">
                <h1>Contact Us</h1>
                <p>
                  Contact our help team on various social media platforms or
                  speak to a represntative
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className=" align-item-center justify-content-center pt-5">
                <form action="">
                  <div className="row">
                    <div className="col-md-10 py-4">
                      <label>What can we help you with?</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 pb-4">
                      <label>Full-name</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 pb-4">
                      <label>Email</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 pb-4">
                      <label>Subject</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 pb-4">
                      <label>Details</label>
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-12 pb-5">
                      <div className="div">
                        <button className="btn btn-lg btn-success">
                          <span>
                            <Send />
                          </span>{" "}
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
       <Footer/>
      </div>
    </div>
  );
};

export default Contact;
