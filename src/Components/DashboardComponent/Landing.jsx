import React from "react";
import "./css/styles.css";
import Navbar from "./../Others/Navbar";
import { MessageSquare } from "react-feather";

const InitialLandingDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div class="wrapper">
          <p>Welcome Back</p>
          <div class="split-layout">
            <div class="split-layout__item">
              <h2>
                I want to Connect
                <br />
                with a Lawyer!
              </h2>
              <p>
                Whether it is a land related issue, document lookup, legal
                representation or consultation; LawyeredUp connects you with an
                options of qualified lawyers
              </p>
              <div className="action_centralize">
                <button className="btn btn-success btn-sm custom_btn">
                  Meet A Lawyer
                </button>
              </div>
            </div>

            <div class="split-layout__divider">
              <div class="split-layout__rule"></div>
              <div class="split-layout__label">Or</div>
              <div class="split-layout__rule"></div>
            </div>

            <div class="split-layout__item">
              <h2>
                I want to take <br />
                Client Cases.{" "}
              </h2>
              <p>
                As a lawyer, you can provide your services to expectant clients.
                Simply pick a case file and respond to the client in real time.
              </p>
              <div className="action_centralize">
                <button className="btn btn-success btn-sm custom_btn">
                  See Cases Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h6>Case History</h6>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="cases_landing">
              <h5>
                Case Title <span>status</span>
              </h5>
              <h6>Submitted 5 days.</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet harum autem ipsa facere assumenda esse asperiores?
                Quisquam voluptate mollitia maiores! Ipsam totam nobis culpa eos
                suscipit maxime libero accusamus deleniti!
              </p>
              <div className="activities">
                4 <MessageSquare size="12" />
              </div>
              <span>See More.</span>
            </div>
          </div>
          <div className="col-4">
            <div className="cases_landing">
              <h5>
                Case Title <span>status</span>
              </h5>
              <h6>Submitted 5 days.</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet harum autem ipsa facere assumenda esse asperiores?
                Quisquam voluptate mollitia maiores! Ipsam totam nobis culpa eos
                suscipit maxime libero accusamus deleniti!
              </p>
              <div className="activities">
                4 <MessageSquare size="12" />
              </div>
              <span>See More.</span>
            </div>
          </div>
          <div className="col-4">
            <div className="cases_landing">
              <h5>
                Case Title <span>status</span>
              </h5>
              <h6>Submitted 5 days.</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet harum autem ipsa facere assumenda esse asperiores?
                Quisquam voluptate mollitia maiores! Ipsam totam nobis culpa eos
                suscipit maxime libero accusamus deleniti!
              </p>
              <div className="activities">
                4 <MessageSquare size="12" />
              </div>
              <span>See More.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialLandingDashboard;
