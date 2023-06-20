import React from "react";
import logo from "../assets/logo2.png";

function Footer() {
  return (
    <div className="container-fluid footer-wrapper">
      <div className="container">
        <div className="footer-col-wrapper">
        
          <div className="row">
            <div className="col-md-6 col-12">
            <div className="logo-wrapper d-flex">
                <img src={logo} alt="" />
                <h1>QuadBit Technologies</h1>
              </div>
              <p className="footer-details">
              © 2023 All Rights Reserved.
              </p>
            </div>
            <div className="col-md-3 col-6 ">
              <div className="footer-link">
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href="/">Projects</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Capabilities</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div className="footer-link">
                <h3>Projects</h3>
                <ul>
                  <li>
                    <a href="http://www.dailyfish.in/">Daily Fish</a>
                  </li>
                  <li>
                    <a href="https://vapestopglobal.com/ae">Vapestop Global</a>
                  </li>
                  <li>
                    <a href="http://genesisgroup.com.au/">Genesis Group</a>
                  </li>
                  <li>
                    <a href="https://www.trtoppers.com/">TR Poppers</a>
                  </li>
                  <li>
                    <a href="https://www.maalgaadi.net/">Maal Gaadi</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
