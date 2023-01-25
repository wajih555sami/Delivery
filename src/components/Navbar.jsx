import React from "react";

import logo from "../assets/img/logo-complete.svg";
import search from "../assets/img/search.png";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="container container-w">
        <a href="#home_sec" className="logo">
          <img src={logo} alt="logo" className="img-fluid" />
        </a>
        <div className="collapse">
          <ul>
            <li>
              <a href="#" className="link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Track
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <a href="#" className="search-icon ">
              <img src={search} alt="icon search" className="img-fluid" />
              <span>Search</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
