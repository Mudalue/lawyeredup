import React from "react";
import { Facebook, Linkedin, Mail, Twitter } from "react-feather";
import LawyerNavbar from "./Lawyerdashboard/LawyerNavbar";

const Lawyersdash = () => {
  return (
    <div>
      <LawyerNavbar />
      <section className="lawyerProfile bg-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-end justify-content-end p-4">
                <button className="btn btn-md btn-blue">Edit profile</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex align-items-center justify-content-center">
                <div className="p-4 text-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    className="img-fluid rounded-circle p-2"
                    alt=""
                  />
                </div>
                <div className="profileheader p-5 text-light">
                  <p>Welcome</p>
                  <h1>Barrister John </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profilecontact bgk-blue py-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-center">
                <div className="me-5 rounded-circle bg-dark p-2 text-light">
                  <Facebook />
                </div>
                <div className="me-5 rounded-circle bg-dark p-2 text-light">
                  <Twitter />
                </div>
                <div className="me-5 rounded-circle bg-dark p-2 text-light">
                  <Mail />
                </div>
                <div className="me-5 rounded-circle bg-dark p-2 text-light">
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profileinfo">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-md-3 pt-5 px-5">
              <div className="d-flex flex-column align-items-start justify-content-start lh-lg">
                <h5 className="fw-bold">Work History</h5>
                <p className="text-muted">
                  <span className="fw-bold">Address: </span>Ibadan, Nigeria
                </p>
                <p className="text-muted">
                  <span className="fw-bold ">Email: </span>John@mail.com
                </p>
                <h5 className="fw-bold">Educational Info</h5>
                <p className="text-muted">
                  <span className="fw-bold ">Degree: </span> Mba, Lagos, Nigeria
                </p>
                <p className="text-muted">
                  <span className="fw-bold ">School: </span>University of Ibadan
                </p>
                <p className="text-muted">
                  <span className="fw-bold ">Certification: </span>Lord of Law
                </p>
                <h5 className="fw-bold">Criminal Record</h5>
                <p className="text-muted">
                  <span className="fw-bold "> </span> None
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 pt-5">
                  <h5>Case Statistics</h5>
                </div>
                <div className="d-flex flex-column p-2">
                  <div className="row">
                    <div className="col-md-4">
                      <h6>Total Number of cases</h6>
                      <h1 className="fw-bold text-muted">654</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-12">
                  <h5>Skill set</h5>
                </div>
                <div className="col-md-10">
                  <div class="progress me-3">
                    <div
                      class="progress-bar bgk-blue"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Communication
                    </div>
                  </div>
                  <div class="progress mt-3">
                    <div
                      class="progress-bar bgk-blue"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Analysis
                    </div>
                  </div>
                  <div class="progress mt-3">
                    <div
                      class="progress-bar bgk-blue "
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Numeracy
                    </div>
                  </div>
                  <div class="progress mt-3">
                    <div
                      class="progress-bar bgk-blue"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Logic and Reasoning
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12 pt-5">
                  <h5>Recent Activity</h5>
                </div>
              </div>
              <div class="list-group  lh-lg">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active bgk-blue "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-muted">And some muted small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-muted">And some muted small print.</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lawyersdash;
