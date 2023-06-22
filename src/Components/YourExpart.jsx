
import RotateText from "./RotateText";

export default function Services(props) {
  return (
    <div className="container-fluid services-full-wrapper" id="services">
      
      <div className="services-wrapper">
        <h2>{props.title}</h2>
        <p className="services-para" >{props.para}</p>
        <RotateText/>
        <div className="service-row-wrapper">
        <div className="row">
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_1_title}</h4>
              
              <p>
                {props.col_1_des}
              </p>
              <ul>
                <li>Competitor Research & Analysis</li>
                <li>Corporate Digital Identity</li>
                <li>Explore Content Strategy</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_2_title}</h4>
              <p>
               {props.col_2_des}
              </p>
              <ul>
                <li>Market Research</li>
                <li>Brand & Identity Planning</li>
                <li>Platform Migration Consulting</li>
                <li>ERP Integrations</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_3_title}</h4>
              <p>
                {props.col_3_des}
              </p>
              <ul>
                <li>Creative Direction</li>
                <li>Positioning & Messaging</li>
                <li>Logo & Identity</li>
                <li>Style Guide</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_4_title}</h4>
              <p>
                {props.col_4_des}
              </p>
              <ul>
                <li>Browser Compatibility</li>
                <li>Search Engine Optimization</li>
                <li>Functionality & Performance Testing</li>
                <li>Client Training & Workshops</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_5_title}</h4>
              <p>
                {props.col_5_des}
              </p>
              <ul>
                <li>Theme Development</li>
                <li>Scripting</li>
                <li>Custom Widgets</li>
                <li>Application Integration</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            
            <div className="service-details-wrapper servic-page-service">
              <h4>{props.col_6_title}</h4>
              <p>
                {props.col_6_des}
              </p>
              <ul>
                <li>Integrated Shopping Cart</li>
                <li>Conversion Optimization</li>
                <li>Ad Placements</li>
                <li>Product & Order Management</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
