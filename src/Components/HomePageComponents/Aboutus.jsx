import React from "react";
import Navbar from "../Others/Navbar";
import Footer from "../Others/Footer";
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
const Aboutus = () => {
  return (
    <>
      <Navbar />
      <section className="bg-dark  lh-lg aboutheader text-light">
        <div className="container">
          <div className="row  px-4">
            <div className="col-md-8 justify-content-center" data-aos="zoom-in">
              <div className="text-start pl-5 ">
                <h4>Who are we....</h4>
                <h1>People, Innovators and Creators</h1>
              </div>
              <div className="pt-5">
                <h3>Our Mission</h3>
                <p>
                  "Our mission at{" "}
                  <span className="txt-blue  fw-bold">Lawyedup</span> is to get
                  justice for everyone from all walks of <br />
                  life as quick as possiible"
                </p>
              </div>
            </div>
            <div className="col-md-4  text-center p-5" data-aos="fade-left">
              <img src="./images/About.svg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="lh-lg aboutcontent">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div>
                <h3 className="fw-bolder">Our Story</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore assumenda corporis porro facilis quam magnam
                  provident quia vero nesciunt possimus, error quisquam animi
                  sequi ipsa neque dolor hic cumque deleniti?
                </p>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div>
                <h3 className="fw-bolder">Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  dolores autem necessitatibus at doloribus accusantium possimus
                  sunt, minima facere est quaerat a quod nihil facilis beatae
                  doloremque, provident eligendi corrupti.
                </p>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div>
                <h3 className="fw-bolder">Core Values</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque tempora voluptates sapiente necessitatibus neque sunt
                  nulla explicabo? Consequuntur deserunt itaque, ipsam possimus
                  ipsum laborum similique, ex sapiente temporibus, consequatur
                  odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abouteam lh-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>Our Team</h3>
              <p>
                People behind the scenes at{" "}
                <span className="txt-blue fw-bolder">LawyedUp</span>
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="text-center">
                <img
                  src="./images/lele.jpeg"
                  class="rounded-circle card-img-top img-fluid p-2"
                  alt="..."
                  style={{width: "250px", height: "250px"}}
                />
                <h6 className="text-center pt-3">Abiodun Mayowa</h6>
                <p class="fst-italic text-center">co-founder</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="text-center">
                <img
                  src="./images/me.jpg"
                  class="rounded-circle card-img-top img-fluid"
                  alt="..."
                  style={{width: "250px", height: "250px"}}
                />
                <h6 className="text-center pt-3">Mudalue Emeka</h6>
                <p class="fst-italic text-center">co-founder</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="text-center">
                <img
                  src="./images/man.png"
                  class="rounded-circle card-img-top img-fluid "
                  alt="..."
                  style={{width: "250px", height: "250px"}}
                />
                <h6 className="text-center pt-3">Somebody</h6>
                <p class="fst-italic text-center">Head of Dept</p>
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
      <div className="footer bg-dark">
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
