import React, { useState, useEffect } from "react";
import { PlusCircle } from "react-feather";
import HttpServices from "./../../Util/HttpServices";
import Navbar from "./Navbar";

const CaseForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [_case, setCase] = useState("");
  const [notification, setNotification] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const HTTP = new HttpServices("/users/check");
  //     let call = await HTTP.get();
  //     console.log(call);
  //   })();
  // }, []);

  const saveCase = async (e) => {
    e.preventDefault();
    const HTTP = new HttpServices("/cases/newcase");
    let call = await HTTP.post({ title, category, details: _case });
    if (call.status) setNotification("Case Posted Successfully!");
    //redirect here! or show link!!
    else setNotification(call.message);
  };

  return (
    <div>
      <Navbar />
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
                            onChange={({ target: { value } }) =>
                              setCategory(value)
                            }
                            defaultValue={category}
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
                            onChange={({ target: { value } }) =>
                              setTitle(value)
                            }
                            defaultValue={title}
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
                            onChange={({ target: { value } }) => setCase(value)}
                            defaultValue={_case}
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

export default CaseForm;
