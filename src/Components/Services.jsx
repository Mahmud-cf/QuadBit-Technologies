import React, { useEffect } from "react";
import RotateText from "./RotateText";

export default function Services(props) {
  return (
    <div className="container-fluid services-full-wrapper" id="services">
      
      <div className="services-wrapper">
        <h2>{props.title}</h2>
        <p className="services-para" >{props.para}</p>
        <RotateText/>
        <div className="row">
          <div className="col-md-4">
            <div className="icon-wrappr">
              <img src={props.img1} alt="" />
            </div>
            <div className="service-details-wrapper">
              <h4>{props.col_1_title}</h4>
              
              <p>
                {props.col_1_des}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-wrappr">
              <img src={props.img2} alt="" />
            </div>
            <div className="service-details-wrapper">
              <h4>{props.col_2_title}</h4>
              <p>
               {props.col_2_des}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-wrappr">
              <img src={props.img3} alt="" />
            </div>
            <div className="service-details-wrapper">
              <h4>{props.col_3_title}</h4>
              <p>
                {props.col_3_des}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
