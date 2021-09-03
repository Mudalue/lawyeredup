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

      <section className="userDashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="card  border-none">
                <div className="row">
                  <div className="col-md-3 me-2">
                    <div class="card">
                      <div class="card-body bgk-blue p-5 text-light">
                        <img
                          src="./images/man.png"
                          className="img-fluid rounded-circle p-5"
                        />
                        <div>
                          <p
                            className="fw-bold  text-center"
                            style={{ fontSize: "20px" }}
                          >
                            John doe
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 pt-5">
                        <p style={{ fontSize: "12px" }}>
                          <Bell  size={15}/> Notification
                        </p>
                        <p>
                          <span className="badge bg-danger">8 views</span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 pt-2">
                        <p style={{ fontSize: "12px" }}>
                          <Mail   size={15}/> Messages
                        </p>
                        <p>
                          <span className="badge bg-danger">1 new message</span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap align-content-center justify-content-between px-4 py-3">
                        <p style={{ fontSize: "12px" }}>
                          <Edit2  size={15} /> Edit Profile
                        </p>
                      </div>
                    <a className="bg-danger text-center text-light" style={{fontSize:"12px"}}>
                        <button className="btn btn-lg text-sm text-light p-4"><PlusCircle size={40}/>{" "} create  case</button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 pt-5">
                    <div className="row mx-3">
                    </div>
                    <div className="row mx-3">
                      <div>
                        <h4 className="pb-3">
                          Case History <Clipboard />
                        </h4>
                      </div>
                      <div className="col-md-4 pb-3">
                        <div className="card p-2 text-center">
                          <div>
                            <p>Case Posted</p>
                            <h1 className="txt-blue fw-bold">30</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 pb-3">
                        <div className="card p-2 text-center">
                          <div>
                            <p>Case in Progress</p>
                            <h1 className="txt-blue fw-bold">10</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 pb-3">
                        <div className="card p-2 text-center">
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
                      <div className="col-md-8 ">
                        <ul class="list-group">
                          <li class="list-group-item d-flex justify-content-between align-items-start pb-3">
                            <div class="ms-2 me-auto py-3">
                              <div class="fw-bold" ><h6 style={{fontSize: "14px"}}>Posted a divorce case</h6> </div>
                            </div>
                            <p class="text-muted pt-2">3 days ago</p>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start pb-3">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold py-3">
                                <h6 style={{fontSize: "14px"}}>8 lawyers reviewed divorce case</h6>
                              </div>
                            </div>
                            <p class="text-muted pt-2">2 days ago</p>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-start pb-3">
                            <div class="ms-2 me-auto">
                              <div class="fw-bold py-3">
                               <h6 style={{fontSize: "14px"}}>Barrister David takes divorce case</h6> 
                              </div>
                            </div>
                            <p class="text-muted pt-2">Yesterday</p>
                          </li>
                          <div className=" d-flex justify-content-end align-items-end py-4 pb-3">
                            <button className="btn btn-md btn-success rounded-pill">
                              see more
                            </button>
                          </div>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul class="list-group"style={{fontSize: "14px"}}>
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
