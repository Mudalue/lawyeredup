import React from "react";
import UserNavbar from "./UserDashboard/UserNavbar";
import {
  Activity,
  Bell,
  Edit2,
  Clipboard,
  Mail,
  Twitter,
  User,
  PlusCircle,
} from "react-feather";

const Userdashboard = () => {
  return (
    <div>
      <UserNavbar />

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="card  border-none">
                <div className="row">
                  <div className="col-md-3 p-5">
                    <div class="card">
                      {/* <img src="..." class="card-img-top" alt="..." /> */}
                      <div class="card-body bgk-blue p-5 text-light">
                        <img
                          src="./images/Contact.png"
                          className="img-fluid rounded-circle p-5"
                        />
                        <div>
                          <p
                            className="fw-bold  text-center"
                            style={{ fontSize: "35px" }}
                          >
                            John doe
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 pt-5">
                        <p style={{ fontSize: "18px" }}>
                          <Bell  size={20}/> Notification
                        </p>
                        <p>
                          <span className="badge bg-danger">8 views</span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 pt-2">
                        <p style={{ fontSize: "18px" }}>
                          <Mail   size={20}/> Messages
                        </p>
                        <p>
                          <span className="badge bg-danger">1 new message</span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 py-3">
                        <p style={{ fontSize: "18px" }}>
                          <Edit2  size={18} /> Edit Profile
                        </p>
                      </div>
                      <a className="bg-danger text-center text-light">
                        <button className="btn btn-lg text-sm text-light p-4 fw-bold"><PlusCircle/>{" "} Create your case</button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 pt-5">
                    <div className="row mx-3">
                      {/* <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Write your case here"
                      ></textarea>
                      <div className="d-flex flex-wrap align-content-end justify-content-end py-4">
                        <button className="btn btn-success">
                          Post your Case
                        </button>
                      </div> */}
                    </div>
                    <div className="row mx-3">
                      <div>
                        <h4 className="pb-3">
                          Case History <Clipboard />
                        </h4>
                      </div>
                      <div className="col-md-4">
                        <div className="card p-5 text-center">
                          <div>
                            <p>Case Posted</p>
                            <h1 className="txt-blue fw-bold">30</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card p-5 text-center">
                          <div>
                            <p>Case in Progress</p>
                            <h1 className="txt-blue fw-bold">10</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card p-5 text-center">
                          <div>
                            <p>Case Concluded</p>
                            <h1 className="txt-blue fw-bold">10</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-3 py-5">
                      <div className="py-3">
                        <h4>
                          Activities <Activity />
                        </h4>
                      </div>
                      <div className="col-md-8">
                        <ul class="list-group">
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto py-3">
                              <div class="fw-bold"> Posted a divorce case</div>
                            </div>
                            <p class="text-muted pt-2">3 days ago</p>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold py-3">
                                8 lawyers reviewed divorce case
                              </div>
                            </div>
                            <p class="text-muted pt-2">2 days ago</p>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold py-3">
                                Barrister David takes divorce case
                              </div>
                            </div>
                            <p class="text-muted pt-2">Yesterday</p>
                          </li>
                          <div className=" d-flex justify-content-end align-items-end py-4">
                            <button className="btn btn-success rounded-pill">
                              see more
                            </button>
                          </div>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul class="list-group">
                          <li class="list-group-item">About</li>
                          <li class="list-group-item">Date joined: 3years</li>
                          <li class="list-group-item">
                            Status:{" "}
                            <span className="badge bg-success">Verified</span>
                          </li>
                          {/* <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li> */}
                        </ul>
                      </div>
                    </div>
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
