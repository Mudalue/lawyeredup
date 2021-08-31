import React from "react";
import { PlusCircle } from "react-feather";
import UserNavbar from "../DashboardComponent/UserDashboard/UserNavbar";

const caseForm = () => {
  return (
    <div>
      <UserNavbar />
      <section className="createcase">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 bgk-blue">
              <div>
                <img
                  src="./images/create-case.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-title pt-3 text-center">
                    <h4>Create your case</h4>
                  </div>
                  <div className="card-text">
                    <form className="p-3">
                      <div className="row">
                        <div className="col-md-12 py-4">
                          <label>Category</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>--Select category--</option>
                            <option value="1">Divorce</option>
                            <option value="2">Bail</option>
                            <option value="3">Homicide</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <label>Title</label>
                          <input
                            className="form-control"
                            placeholder="Enter Case title"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <label>Case information</label>
                          <textarea
                            className="form-control"
                            placeholder="Write your case"
                            rows="4"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <label>Questions</label>
                          <input
                            className="form-control"
                            placeholder="Questions required for case"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 py-3">
                          <button
                            className="btn btn-successs bg-success text-light py-3 rounded-pill"
                            style={{ width: "100%" }}
                          >
                            <PlusCircle />
                            {""} Create case
                          </button>
                        </div>
                      </div>
                    </form>
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

export default caseForm;
