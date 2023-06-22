import React from "react";
import Navigation from "../Components/Navigation";
import "./Services.css";
import logo from "../assets/logo.png";
import Service from "../Components/Services";
import web_d from "../assets/web_d.png";
import video from "../assets/video.png";
import graphic from "../assets/graphic.png";
import quadbit from "../assets/quadbit.png";
import computer from "../assets/computer.gif";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import YourExpart from "../Components/YourExpart";
import { CiLaptop } from 'react-icons/ci';
import { HiOutlinePencil } from 'react-icons/hi';
import plan from '../assets/planing.png'
import pencil from '../assets/pencil.png'
import laptop from '../assets/laptop.png'
import plain from '../assets/plain.png'

function Services() {
  return (
    <div className="services-wapper">
      <Navigation logo1={logo} logo2={logo} />
      <div className="">
        <div className="container-fluid">
          <div className="services-header">
            <h1>Our services.</h1>
            <p>
              We approach all that we do with innovative insights, dedication
              and a heck of a lot of passion!
            </p>
          </div>
        </div>
        <div className="experties-wrapper">
          <YourExpart
            title="Our expertise, your experts."
            para="As one of the top-growing agency  , our team of skilled designers and developers bring years of experience to the table. We partner with brands to bring their stories to life through creative design, innovative thinking, and a heck of a lot of passion."
            col_1_title="Planning & research "
            col_2_title="Commerce Strategy"
            col_3_title="Branding"
            col_4_title="Quality assurance"
            col_5_title="Development"
            col_6_title="eCommerce & mCommerce"
            col_1_des="Knowledge leads to a greater success rate. With a dedicated team of high skilled experts, we can leverage our experience as well as provide in-depth research and analysis to turn around an unparalleled experience for our clients."
            col_2_des="We believe that your success is our success, and focused strategy is critical in achieving this. Our process focuses on the entire customer experience in order to make the buyer journey as simple, intuitive, and consistent as possible."
            col_3_des="We believe that your success is our success, and focused strategy is critical in achieving this. Our process focuses on the entire customer experience in order to make the buyer journey as simple, intuitive, and consistent as possible."
            col_4_des="What good is a website or function that does not function? We focus on delivering high quality services to our clients, running rigorous code audits and function testing to assure your site is leveraging the newest technologies, while maintaining an optimized function or site."
            col_5_des="Our development team will bring the design to life seamlessly, rendering beautifully on modern browsers, mobile, and tablet. Improving functionality by leveraging third party integrations or building custom tools is what we do best – throw us a curveball and we’ll knock it out of the park."
            col_6_des="We have helped clients all over the world create captivating ecommerce web presences that work. Capture sales on all devices, wherever you want to sell."
          />
        </div>

        <div className="container-fluid">
          <div className="project-management">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="project-management-left-part">
                  <h3>Project management.</h3>
                  <p>
                    Your projects will be developed by our developers.
                    Throughout all of our projects, you will have access to a
                    dedicated account dashboard, where we will be able to
                    efficiently, and effictively share updates, files and more!
                    You will have a dedicated project manager to ensure project
                    success!
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-management-right-part d-flex">
                  <div>
                    <img src={quadbit} alt="" className="img-fluid" />
                  </div>
                  <div>
                    <img src={computer} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="container planing-wrapper" >
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-praning-div-wrapper">
              <div className="planing-icon">
                <img src={plan} alt="" />
              </div>
              <h2>Planning</h2>
              <p>You will be assigned one project manager to plan and discuss project details, so you will always have someone to turn to.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-praning-div-wrapper">
              <div className="planing-icon">
                <img src={pencil} alt="" />
              </div>
              <h2>Design</h2>
              <p>Our project managers work with our developers to create an engaging site design based on your specifications and site inspirations.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-praning-div-wrapper">
              <div className="planing-icon">
                <img src={laptop} alt="" />
              </div>
              <h2>Develop</h2>
              <p>Here is where the magic happens. Our project developers will develop your site, giving your preview links along the way.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-praning-div-wrapper">
              <div className="planing-icon">
                <img src={plain} alt="" />
              </div>
              <h2>Launch</h2>
              <p>Now you're ready to take on the world wide web. Don't worry, QuadBit Technologies is still here to help you even after the launch!</p>
            </div>
          </div>
        </div>
        </div>
      </div>





      <div className="work-process container-fluid ">
        <div className="work-process-wrapper">
          <h2 className="text-center">Our process.</h2>
          <p className="work-process-para">
            Whether you’re starting from scratch, migrating from
            another platform, or in need of a refresh, you can trust our team to
            be as passionate about your project as you are. Making you stand out
            from the competition is what we do best.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Discovery</h4>
                <p>
                  This initial phase of your project is vital, as it forms the
                  basis for all design and functionality decisions as we move
                  forward. We will combine our in-house competencies with
                  information gathered from your team and key stakeholders to
                  create a framework for your commerce success.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Design</h4>
                <p>
                  Our team will design a visually stunning experience for your
                  customers that will translate beautifully across web, mobile,
                  and social platforms. Best practices will be adopted to
                  maximize conversion rates and design for changing consumer
                  behaviour to create the best possible buyer experience.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Development</h4>
                <p>
                  This is where things really start to take shape as we
                  integrate the design framework with the required functionality
                  identified in Discovery. At the completion of this phase we’ll
                  have created a user-friendly and accessible site that will
                  render beautifully on all devices.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Quality Assurance</h4>
                <p>
                  Prior to deploying the final website, we conduct a variety of
                  tests to ensure it is cross-browser compatible and to evaluate
                  its performance. Content is reviewed by our team and the
                  client to ensure everything is perfect before making the
                  website live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-process container-fluid post-lunch">
        <div className="work-process-wrapper">
          <h2 className="text-center">Post launch.</h2>
          <p className="work-process-para">
            With rapid advancements being the only real constant when it comes
            to technology, use our knowledge to fuel your commerce success. We
            won’t vanish into thin air the moment your site goes live – our team
            is at the ready to make sure your site is always running at peak
            efficiency.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Post Launch Success</h4>
                <p>
                  With rapid advancements being the only real constant when it
                  comes to technology, use our knowledge to fuel your commerce
                  success. We won’t vanish into thin air the moment your site
                  goes live – our team is at the ready to make sure your site is
                  always running at peak efficiency.
                </p>
                <ul>
                  <li>Ongoing design support</li>
                  <li>New feature recommendations</li>
                  <li>Third party app integrations</li>
                  <li>Update Shopify theme functionality</li>
                  <li>CSS & styling changes</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Optimization</h4>
                <p>
                  In a perfect world, it would be as easy as hitting publish on
                  your new website and watch the sales roll in. While we all
                  know that isn’t the case, it’s no reason to panic. Our team
                  will work with you to put together an à la carte strategy that
                  suits your business needs.
                </p>
                <ul>
                  <li>Social media design</li>
                  <li>Branded email marketing templates</li>
                  <li>Conversion rate optimizations</li>
                  <li>Site performance optimizations</li>
                  <li>Search engine optimizations</li>
                  <li>Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Services;
