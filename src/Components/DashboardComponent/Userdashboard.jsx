import React from "react";
import UserNavbar from "./UserDashboard/UserNavbar";
import { Edit2, Facebook, Linkedin, Twitter } from "react-feather";

const Userdashboard = () => {
  return (
    <div>
      <UserNavbar />
      <section className="udashboardheader">
        <div className="container-fluid bg-dark m-0">
          <div className="row g-5">
            <div className="col-md-12">
              <div className="text-center ">
                <h1 className="txt-blue">Welcome back John!</h1>
                <p className="text-light">we are pleased to work with you!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="udashboardcontent ">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-3">
              <div className="card box ">
                <div className="card-body pt-3">
                  <div className="card-title d-flex align-items-center justify-content-between">
                    <h5>Profile</h5>

                    <button className="btn btn-sm">
                      <Edit2 />{" "}
                    </button>
                  </div>
                  <div className="card-text">
                    <div className="text-center">
                      <img
                        src="./images/Contact.png"
                        className="img-fluid rounded-circle"
                      />
                      <h2 className="pt-3 fw-bolder">John Doe</h2>
                      <p>Lagos, Nigeria</p>
                      <div class="d-flex flex-column bd-highlight">
                        <div class="p-2 bd-highlight">Email: john@doe.com</div>
                        <div class="p-2 bd-highlight">
                          Date Joined: 20/12/2006
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className="card">
                <div className="card-body">
                 <h5 className="card-title">Statistics</h5>
                 <h1 className="card-text txt-blue">20 cases</h1>
                </div>
              </div>
            </div>
            <div className="col-md-9 pt-5">
              <div className="row g-5">
                <div className="col-md-8 pt-5">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Post a case"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-info"
                      type="button"
                      id="button-addon2"
                    >
                      Submit
                    </button>
                  </div>
                  <div class="list-group">
                    <div className="py-4">
                      <h6>Case History</h6>
                    </div>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action "
                      aria-current="true"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Posted a Case</h5>
                        <small>3 days ago</small>
                      </div>
                      <p class="mb-1">Theft Case</p>
                      <small>And some small print.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Contacted Barrister </h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">Consultant</p>
                      <small class="text-muted">
                        And some muted small print.
                      </small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Some placeholder content in a paragraph.
                      </p>
                      <small class="text-muted">
                        And some muted small print.
                      </small>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="list-group ">
                    <div className="py-4">
                      <h6>Activities</h6>
                    </div>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action active bgk-blue"
                      aria-current="true"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Posted a Case</h5>
                        <small>3 days ago</small>
                      </div>
                      <p class="mb-1">Theft Case</p>
                      <small>And some small print.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Contacted Barrister </h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">Consultant</p>
                      <small class="text-muted">
                        And some muted small print.
                      </small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1 over-flow-hidden">
                        Some placeholder content .
                      </p>
                      <small class="text-muted">
                        And some muted small print.
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Userdashboard;
