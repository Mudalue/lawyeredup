import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
  Twitch,
} from "react-feather";

const CaseInfo = () => {
  return (
    <div>
      <Navbar />
      <section className="caseinfo">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-12" style={{marginTop: " 50px"}}>
              <h4 className="text-start fw-bolder">Case Information</h4>
              <hr />
            </div>
            <div className="col-md-4">
              <p><span className="fw-bold">Date posted:</span>  3days ago</p>
            </div>
            <div className="col-md-4">
              <p><span className="fw-bold">Location:</span> Lagos, Nigeria</p>
            </div>
            <div className="col-md-4">
              <p><span className="fw-bold">Duration:</span> 4months</p>
            </div>
            <div className="col-md-4">
              <p><span className="fw-bold">Fee range:</span> &#8358; 40,000 - &#8358; 90,000</p>
            </div>
            <div className="col-md-4">
              <p><span className="fw-bold">Case-type:</span> Homicide</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-12">
              <h4 className="fw-bolder">Case Briefing</h4>
            </div>
            <hr />
            <div className="col-md-12">
              <p className="lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat qui quisquam cupiditate, nihil commodi, mollitia
                laudantium reprehenderit modi eum voluptatibus ab voluptatem
                iste tempore ex tempora, voluptatum placeat autem veritatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                laudantium quae suscipit commodi atque ullam vitae natus et.
                Corporis quas illum vero assumenda ab enim molestiae, ducimus
                sapiente ipsa eaque! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Impedit corporis aliquid beatae. Eius, fugit
                rerum nobis consectetur tempora, vero, ab labore quis nihil
                earum modi impedit commodi atque. Rem, dolor.
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-12">
              <h4 className="fw-bolder">Questions Required</h4>
              <hr />
              <p><span className="fw-bold">Question 1:</span> Have you handled this type of case before?</p>
              <p><span className="fw-bold">Question 2:</span> Have u been called to bar?</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-12">
              <h4 className="fw-bolder">Case Activity</h4>
              <hr />
              <p><span className="fw-bold">Offers:</span> more than 50 lawyers responded</p>
              <p><span className="fw-bold">Interest:</span> 50 lawyers have shown interest</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-12">
              <h4 className="fw-bolder">About Client</h4>
              <hr />
              <p>
              <span className="fw-bold">Status:</span>  <span className="badge bg-warning">Verified</span>
              </p>
              <p><span className="fw-bold">Location:</span> Nigeria</p>
              <p><span className="fw-bold">Date joined:</span> 4years ago</p>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-12 text-end">
              <button
                className="btn btn-md bg-success text-light fw-bold px-5 py-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Negotiate Fee
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <mdoal></mdoal> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Negotiations
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12 py-4">
                    <label>Clients offer</label>
                    <input
                      class="form-control"
                      type="text"
                      value="Amount: &#8358; 90,000"
                      aria-label="readonly input example"
                      readonly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pb-4">
                    <label>Lawyedup</label>
                    <input
                      class="form-control"
                      type="text"
                      value="20% of &#8358; 90,000"
                      aria-label="readonly input example"
                      readonly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pb-4">
                    <label>Lawyers bid</label>
                    <input
                      class="form-control"
                      type="text"
                      value="&#8358; 90,000"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary px-5 py-3 text-light fw-bold">
                Place your Bid
              </button>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default CaseInfo;
