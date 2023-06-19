import React from "react";
import logo from "../assets/footer-logo.png";

function Footer() {
  return (
    <div className="container-fluid footer-wrapper">
      <div className="container">
        <div className="footer-col-wrapper">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <img src={logo} alt="" />
              <p className="footer-details">
                QuadBit Technologies is an award winning website development
                agency in New York. We are Shopify Experts & Shopify Plus
                Experts focused on building dynamic Shopify custom designs for
                our clients all over the world.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 ">
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
            <div className="col-md-4 col-sm-6 ">
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
