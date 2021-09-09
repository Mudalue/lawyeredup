import React from "react";
import { Facebook, GitHub, Instagram, Linkedin, Twitter, Twitch, Mail, Phone, Home } from "react-feather";

const Footer = () => {
  return (
    <div class="container-fluid py-5">
      <footer
        class="text-center  text-light"
        
      >
        

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className="text-center">
                  <img src="./images/llogo.png" className="img-fluid" style={{width: "100px", height: "100px"}}/>
                  </div>
                {/* <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                /> */}
                <p className="mt-3">
                 We are a group of people that has gotten tired of the injustice in the society 
                </p>
              </div>

              {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Products</h6> */}
                {/* <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                /> */}
                {/* <p>
                  <a href="#!" class="text-white">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Bootstrap Angular
                  </a>
                </p>
              </div> */}

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                {/* <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                /> */}
                <p>
                  <a href="#!" class="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Contact us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                {/* <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                /> */}
                <p>
                  <Home size={20} className="pb-1"/>  Lagos, Nigeria 
                </p>
                <p>
                  <Mail size={20} className="pb-1"/> info@example.com
                </p>
                <p>
                  <Phone size={20} className="pb-1"/> + 01 234 567 88
                </p>
                {/* <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p> */}
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3 text-sm"
        //   style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2021 Copyright:{" "}
          <a class="text-white" href="LawyedUp.com">
          LawyedUp.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
