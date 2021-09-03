import React, { useState, useEffect } from "react";
import Navbar from "./Others/Navbar";
import { CheckCircle, Clipboard, User } from "react-feather";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
  Twitch,
} from "react-feather";

import Footer from "./Others/Footer";
import { Link } from "react-router-dom";
import HttpServices from "./../Util/HttpServices";
import Case from "./HomePageComponents/Components/Case";

const Homepage = () => {
  const [cases, allCases] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const SERVER = new HttpServices("/cases/cases");
      let data = await SERVER.get();
      if (data.status) allCases(data.data);
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <section className="home bgk-blue">
        <div className="container-fluid">
          <div
            className="row"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-md-12 col-sm-6">
              <div className=" headertext">
                <h1 className="text-light">
                  <span>Are you</span> <br />
                  <span className="fw-bold txt-blue">LawyeredUp?</span>
                </h1>
                <p className="text-light">Your connection to justice</p>

                <div>
                  <a href="/Signin">
                    <button className="btn bg-light btn-md px-4 py-2 fw-boulder text-dark">
                      Get started
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="pt-5 homeimg">
                <img src="images/judge.svg" class="img-fluid" />
              </div>
            </div> */}
            {/* <div className="col-md-5 p-4"></div> */}
          </div>
        </div>
      </section>
      <section className="howeop">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <img src="/images/connect.svg" className="img-fluid" />
            </div>
            <div className="col-md-6 " data-aos="zoom-in">
              <div className="pt-5  p-5">
                <h3 className="pt-5">What we do?</h3>
                <p className="lh-lg">
                  See yourself as the location icon coloured black and the{" "}
                  <br /> other location icon coloured grey as lawyer around,{" "}
                  <span className="txt-blue fw-bold">LawyedUp</span> brings
                  <br /> you closer to justice in your time of need{" "}
                </p>
                <div>
                  <button className="btn btn-blue  btn-md">see more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps bg-dark">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 text-light">
              <div
                className="lh-lg text-start stepscontent"
                data-aos="fade-left"
              >
                <div>
                  <h3 className="txt-blue">Steps to follow</h3>
                  <p>Find justice by following the steps below</p>
                </div>
                <div>
                  <p>
                    <span className="txt-blue me-3">
                      <CheckCircle size={22} />
                    </span>{" "}
                    Create an account
                  </p>
                  <p>
                    <span className="txt-blue me-3">
                      <CheckCircle size={22} />
                    </span>{" "}
                    Login
                  </p>
                  <p>
                    <span className="txt-blue me-3">
                      <CheckCircle size={22} />
                    </span>{" "}
                    State your case
                  </p>
                  <p>
                    <span className="txt-blue me-3">
                      <CheckCircle size={22} />
                    </span>{" "}
                    Get lawyered up
                  </p>
                  <p>
                    <span className="txt-blue me-3">
                      <CheckCircle size={22} />
                    </span>{" "}
                    Payment
                  </p>
                </div>
                <div className="text-centers">
                  <button className="btn btn-blue btn-lg px-3">Start</button>
                </div>
              </div>
            </div>
            <div className="col-md-6   ">
              <img
                src="./images/list.svg"
                className="img-fluid"
                data-aos="fade-up-right"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* case section */}
      <section className="casefiles ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="caseheader">
                <h3>Case Files</h3>
                <p className="text-muted">
                  Top cases that requires to be{" "}
                  <span className="txt-blue fw-bold">Lawyered up</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-3">
            {isLoading && <div className="col-12">Fetching Recent Cases!</div>}
            {!isLoading && cases.length === 0 && <p>No Cases Found!</p>}
            {cases.length !== 0 &&
              cases.map((c) => <Case key={c._id} usercase={c} />)}
          </div>
        </div>
      </section>

      <section className="lawyersection ">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="caseheader mt-5 text-center text-dark">
                <h3>Suggested Lawyers</h3>
                <p>
                  Top lawyers to get your case{" "}
                  <span className="txt-blue fw-bold">Lawyered Up</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pb-3">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">
                      <div className="col-md-3 pb-3">
                        <div class="card">
                          <div className="text-center">
                            <img
                              src="./images/man.png"
                              class="rounded-circle card-img-top img-fluid pt-4"
                              alt="..."
                              style={{ width: "50%", height: "50%" }}
                            />
                          </div>

                          <div class="card-body pt-4 lh-lg">
                            <div class="card-text">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a
                              href="#"
                              class="btn bgk-blue text-light"
                              style={{ width: "100%" }}
                            >
                              contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 pb-3">
                        <div class="card">
                          <div className="text-center">
                            <img
                              src="./images/man.png"
                              class="rounded-circle card-img-top img-fluid pt-4"
                              alt="..."
                              style={{ width: "50%", height: "50%" }}
                            />
                          </div>

                          <div class="card-body pt-4 lh-lg">
                            {/* <div class="card-title">
                              <h4>
                                <User size={25} className="p-1" /> Profile
                              </h4>
                            </div> */}
                            <div class="card-text">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a
                              href="#"
                              class="btn bgk-blue text-light"
                              style={{ width: "100%" }}
                            >
                              contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 pb-3">
                        <div class="card">
                          <div className="text-center">
                            <img
                              src="./images/man.png"
                              class="rounded-circle card-img-top img-fluid pt-4"
                              alt="..."
                              style={{ width: "50%", height: "50%" }}
                            />
                          </div>

                          <div class="card-body pt-4 lh-lg">
                            {/* <div class="card-title">
                              <h4>
                                <User size={25} className="p-1" /> Profile
                              </h4>
                            </div> */}
                            <div class="card-text">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a
                              href="#"
                              class="btn bgk-blue text-light"
                              style={{ width: "100%" }}
                            >
                              contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 pb-3">
                        <div class="card">
                          <div className="text-center">
                            <img
                              src="./images/man.png"
                              class="rounded-circle card-img-top img-fluid pt-4"
                              alt="..."
                              style={{ width: "50%", height: "50%" }}
                            />
                          </div>

                          <div class="card-body pt-4 lh-lg">
                            {/* <div class="card-title">
                              <h4>
                                <User size={25} className="p-1" /> Profile
                              </h4>
                            </div> */}
                            <div class="card-text">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a
                              href="#"
                              class="btn bgk-blue text-light"
                              style={{ width: "100%" }}
                            >
                              contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3 accessibility bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 " data-aos="fade-right">
              <div className="dev py-5 pl-5 lh-lg">
                <h3>Accessiblity</h3>
                <p>
                  Check out our application on a wide range of devices from
                  <br />
                  phones, ipads and Laptops, We at{" "}
                  <span className="txt-blue fw-bold">LawyedUp</span> makes
                  <br />
                  accessiblity to justice at the palm of your hands
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/Devices.svg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="contact p-4">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 ">
              <img src="images/Contact.svg " className="img-fluid pr-5" />
            </div>
            <div className="col-md-6 " data-aos="fade-right">
              <div className="pt-5 lh-lg pr-5 ">
                <h3>Contact us</h3>
                <p>
                  Contact us through our various channels and social media
                  network <br /> or you could give us a feedback on our platform
                </p>
              </div>
              <div>
                <button className="btn btn-md btn-blue">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Homepage;
