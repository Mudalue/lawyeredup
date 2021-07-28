import React from "react";
import Navbar from "./Others/Navbar";
import { Clipboard, User } from "react-feather";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
  Twitch,
  Mail,
  Phone,
  Home,
} from "react-feather";

import Footer from "./Others/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-6">
              <div className="d-flex align-items-center headertext pt-5">
                <div className="flex-fill text-center">
                  <h1>
                    Welcome to{" "}
                    <span className="txt-blue fw-bold">LawyedUp</span>
                  </h1>
                  <p>a platform that gets justice for you</p>
                  <div className="div">
                    <button className="btn bgk-blue btn-lg">Get started</button>
                  </div>
                </div>

                <img src="images/judge.svg" class="img-fluid" />
              </div>
            </div>
            <div className="col-md-5 p-4"></div>
          </div>
        </div>
      </section>
      <section className="bg-grey py-5 howeop animate__animated animate__bounce animate__delay-2s">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/connect.svg" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="pt-5 text-muted p-5">
                <h3 className="pt-5">What we do?</h3>
                <p className="lh-lg">
                  See yourself as the location icon coloured black and the{" "}
                  <br /> other location icon coloured grey as lawyer around,{" "}
                  <span className="txt-blue fw-bold">LawyedUp</span> brings
                  <br /> you closer to justice in your time of need{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* case section */}
      <section className="casefiles mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-4 text-center">
              <div className="caseheader">
                <h3>Case Files</h3>
                <p className="text-muted">
                  Top cases that requires to be{" "}
                  <span className="txt-blue fw-bold">Lawyered up</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Clipboard /> Case 1
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Homicide</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-danger">Urgent</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Clipboard /> Case 2
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Murder</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-danger">Urgent</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Clipboard /> Case 3
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Bail</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-warning">2 days</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Clipboard /> Case 4
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Theft</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-danger">Urgent</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      <Clipboard /> Case 5
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Money laundry</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-danger">Urgent</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>
                      {" "}
                      <Clipboard /> Case 6
                    </h4>
                  </div>
                  <div className="card-text">
                    <p>Category: Fraud</p>
                    <p>Name of Plaintif: John Doe</p>
                    <p>
                      Status: <span className="badge bg-danger">Urgent</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-md btn-info">Take case</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lawyersection bg-grey mt-5 ">
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
            <div className="col-md-12">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-success">
                                  Available
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body px-3">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="card pt-4" style={{ width: "18rem;" }}>
                          <img
                            src="./images/pic.png"
                            class="rounded-circle card-img-top img-fluid pt-4"
                            alt="..."
                          />
                          <div class="card-body">
                            <div class="card-title">
                              <h4>
                                <User size={25} className="pb-1" /> Profile
                              </h4>
                            </div>
                            <div class="card-text d-flex flex-column">
                              <p>Name: john doe</p>
                              <p>Rating: 5 stars</p>
                              <p>
                                status:{" "}
                                <span className="badge bg-danger">
                                  Unavailable
                                </span>
                              </p>
                            </div>
                            <a href="#" class="btn bgk-blue text-light">
                              Contact
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
      <section className="mt-5 accessibility">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
      <section className="contact">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <img src="images/call-center.svg" className="img-fluid" />
            </div>
            <div className="col-md-6 ">
              <div className="pt-5 lh-lg">
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
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active"></div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
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

export default Homepage;
