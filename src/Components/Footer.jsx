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
                    <a href="/#projects">Projects</a>
                  </li>
                  <li>
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <a href="/services">Capabilities</a>
                  </li>
                  <li>
                    <a href="/#contact">Contact</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div className="footer-link">
                <h3>Projects</h3>
                <ul>
                  <li>
                    <a href="http://www.dailyfish.in/" target="blank">Daily Fish</a>
                  </li>
                  <li>
                    <a href="https://vapestopglobal.com/ae" target="blank">Vapestop Global</a>
                  </li>
                  <li>
                    <a href="http://genesisgroup.com.au/" target="blank">Genesis Group</a>
                  </li>
                  <li>
                    <a href="https://www.trtoppers.com/" target="blank">TR Poppers</a>
                  </li>
                  <li>
                    <a href="https://www.maalgaadi.net/" target="blank">Maal Gaadi</a>
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
