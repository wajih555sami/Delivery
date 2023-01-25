import React from "react";

import Navbar from "./components/Navbar";

import imgSide from "./assets/img/imgSide.png";
import instagram from "./assets/img/Instagram_ Icon.png";
import facebook from "./assets/img/Facebook_Icon.png";
import tiwtter from "./assets/img/Twitter_Icon.png";

function App() {
  return (
    <>
      <header className="header-sec">
        <Navbar />
        <div className="welcom-w position-relative">
          <div className="row g-0 align-items-center">
            <div className="col-md-6">
              <figure className="hold-img">
                <img src={imgSide} alt="Man" className="img-fluid" />
              </figure>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h1 className="title">
                  A new Perspective of Business Delivery
                </h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <a href="#" className="btn-common more">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <ul className="social">
            <li>
              <a href="#" className="social-link" target="_blank">
                <img src={instagram} className="img-fluid" alt="" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link" target="_blank">
                <img src={facebook} className="img-fluid" alt="" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link" target="_blank">
                <img src={tiwtter} className="img-fluid" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default App;
