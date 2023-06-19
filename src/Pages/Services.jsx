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

function Services() {
  return (
    <div className="services-wapper">
      <Navigation logo1={logo} logo2={logo} />
      <div className="container-fluid">
        <div className="services-header">
          <h1>Our services.</h1>
          <p>
            We approach all that we do with innovative insights, dedication and
            a heck of a lot of passion!
          </p>
        </div>
        <div className="experties-wrapper">
          <Service
            title="Our expertise, your experts."
            para="As one of the top-reviewed Shopify & Shopify Plus experts, our team of skilled designers and developers bring years of experience to the table. We partner with brands to bring their stories to life through creative design, innovative thinking, and a heck of a lot of passion."
            col_1_title="Web Development "
            col_2_title="Graphics Design"
            col_3_title="Video Editing"
            col_1_des="Crafting pixel-perfect web solutions for global clients. Elevate your online presence today!"
            col_2_des="Elevate your brand with stunning graphic design solutions. Unleash creativity, captivate audiences."
            col_3_des="Transform your footage with expert video editing. Unleash the power of visual storytelling."
            img1={web_d}
            img2={graphic}
            img3={video}
          />
        </div>

        <div className="project-management">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="project-management-left-part">
                <p>Made with love in New York.</p>
                <h3>Project management.</h3>
                <p>
                  Your projects will be developed by our New York based
                  developers. Throughout all of our projects, you will have
                  access to a dedicated account dashboard, where we will be able
                  to efficiently, and effictively share updates, files and more!
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

      <div className="project-comment container-fluid">
        <div className="col-6">
          <div className="comment-wrapper">
            <div>
              <p>
                "These minions are everything you imagined they would be;
                Dedicated, hard working, and always there for you! I came into
                this project knowing exactly what I wanted, and they delivered.
                As a business owner I tend to be demanding (sorry guys), but the
                minions were beyond patient and worked in a professional, timely
                manner. They also helped me to learn the backend of the website,
                and how many of the new features worked. They made it incredibly
                easy to communicate with them, and made it a priority to make
                time for me (no matter how silly my questions). I truly
                appreciated that. The best part? They made a process that could
                have been potentially really stressful, really FUN! The new site
                is not just functional, it’s fabulous! Thank you for everything
                minions!"
              </p>
              <h5>Jessica & Glamour Dolls Makeup</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="work-process container-fluid ">
        <div className="work-process-wrapper">
          <h2 className="text-center">Our process.</h2>
          <p className="work-process-para">
            Whether you’re starting from scratch, migrating to Shopify from
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
            We take a relationship-centric approach to our work, and will never
            make you feel like simply a transaction. Our projects are
            partnerships and as such we are here to assist you along the way,
            refining where necessary to create the best possible experience for
            your customers.
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
                  <li>Ongoing design support</li>
                  <li>CSS & styling changes</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-process-single-item">
                <h4>Design</h4>
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
