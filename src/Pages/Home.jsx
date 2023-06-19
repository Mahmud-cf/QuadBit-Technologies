import React from "react";
import Navigation from "../Components/Navigation";
import Typewriter from "typewriter-effect";
import aboutImg1 from "../assets/aboutimg1.png";
import aboutImg2 from "../assets/aboutimg2.png";
import project_term from "../assets/project_term.png";
import SingleProject from "../Components/SingleProject";
import project_img_1 from "../assets/project1.jpeg";
import project_img_2 from "../assets/project2.webp";
import project_img_3 from "../assets/project3.webp";
import project_img_4 from "../assets/project4.webp";
import project_img_5 from "../assets/project5.webp";
import project_img_6 from "../assets/project6.webp";
import project_img_7 from "../assets/project7.webp";
import project_img_8 from "../assets/project8.webp";
import project_img_9 from "../assets/project9.webp";
import Services from "../Components/Services";
import serviceimg1 from '../assets/trophy.png'
import serviceimg2 from '../assets/sheet.png'
import serviceimg3 from '../assets/running.png'
import web_d from '../assets/web_d.png'
import graphic from '../assets/graphic.png'
import video from '../assets/video.png'
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import logo1 from '../assets/logo.png'
import logo2 from '../assets/logo2.png'

function Home() {
  return (
    <div>
      <header className="home-header">
        <Navigation logo2={logo1} logo1={logo2} />
        <div className="header-wrapper">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Hi There!")

                  .callFunction(() => {})
                  .pauseFor(1000)
                  .changeDeleteSpeed(50)
                  .deleteAll()

                  .changeDelay(100)
                  .typeString("We are QuadBit Technologies.")
                  .callFunction(() => {})
                  .pauseFor(1000)
                  .changeDeleteSpeed(50)
                  .deleteAll()

                  .changeDelay(100)
                  .typeString("We love what we do.")
                  .callFunction(() => {})
                  .pauseFor(1000)
                  .changeDeleteSpeed(50)
                  .deleteAll()

                  .changeDelay(100)
                  .typeString("We help build businesses.")
                  .callFunction(() => {})
                  .pauseFor(1000)
                  .changeDeleteSpeed(50)
                  .deleteAll()

                  .changeDelay(100)
                  .typeString("Creating for visionary creators.")
                  .callFunction(() => {})

                  .start();
              }}
            />
          </h1>
          <p className="heading-pera">
            We create and maintain pixel perfect web creations for clients all
            over the world.
          </p>
          <button className="btn header-button">Let's get to work!</button>
        </div>
      </header>
      <div className="container-fluid" id="about">
        <div className="container">
          <div className="about-section">
            <div className="about-section-top">
              <p>Creative solutions, created better.</p>
              <h2>Award winning website developers.</h2>
              <p className="about-para">
                
              QuadBit Technologies is an award winning website development agency in
                  New York. We are Shopify Experts & Shopify Plus Experts
                  focused on building dynamic Shopify custom designs for our
                  clients all over the world.
                
              </p>
            </div>
          </div>

          <div className="about-sectino-details">
            <div className="row">
              <div className="col-md-6">
                <h3>Creative solutions</h3>
                <p>
                  We believe in coming up with original ideas and turning them
                  into digital work that is both innovative and interactive. We
                  are a team of professional developers inspired by creativity
                  and driven by client success.
                </p>
                <p>
                QuadBit Technologies has developed websites for clients big and small
                  in every industry. Our versatility is well tested and our
                  ingenuity is well proven.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={aboutImg1}
                  alt="About Image one"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <img
                  src={aboutImg2}
                  alt="About Image two"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h3>Created better</h3>
                <p>
                QuadBit Technologies is a well respected, well decorated development
                  agency. With over 30 years of combined development experience,
                  our team is well versed in all facets of development, design,
                  search engine optimization, conversion optimization and more.
                </p>
                <p>We do what they do, we just do it better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services 
        title='What we offer.'
        col_1_title='Web Development '
        col_2_title='Graphics Design'
        col_3_title='Video Editing'
        col_1_des='Crafting pixel-perfect web solutions for global clients. Elevate your online presence today!'
        col_2_des='Elevate your brand with stunning graphic design solutions. Unleash creativity, captivate audiences.'
        col_3_des='Transform your footage with expert video editing. Unleash the power of visual storytelling.'
        img1={web_d}
        img2={graphic}
        img3={video}
              
      />


      <div className="project-wrapper container-fluid p-2" id="projects">
        <div className="all-project">
          <SingleProject
            title="Pool Supplies Canada"
            project_img={project_img_1}
            link="https://www.poolsuppliescanada.ca/"
          />
          <SingleProject
            title="Daily Fish"
            project_img={project_img_2}
            link="http://www.dailyfish.in/"
          />
          <SingleProject
            title="Sydney Bio Packaging"
            project_img={project_img_3}
            link="https://sydneybiopackaging.com.au/"
          />
          <SingleProject
            title="Vapestop Global"
            project_img={project_img_4}
            link="https://vapestopglobal.com/ae"
          />
          <SingleProject
            title="Auto Color Warehouse"
            project_img={project_img_5}
            link="https://www.autocolorwarehouse.com/"
          />
          <SingleProject
            title="Genesis Group"
            project_img={project_img_6}
            link="http://genesisgroup.com.au/"
          />
          <SingleProject
            title="TR Poppers"
            project_img={project_img_7}
            link="https://www.trtoppers.com/"
          />
          <SingleProject
            title="Maal Gaadi"
            project_img={project_img_8}
            link="https://www.maalgaadi.net/"
          />
          <SingleProject
            title="Balo Trade"
            project_img={project_img_9}
            link="https://www.balotrade.com/"
          />
          
        </div>
      </div>

      <div className="project-term container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="project-term-single-part">
              <h3>People first designs.</h3>
              <p>
                People ignore design that ignores people. We develop
                eye-catching, people first designs, so people can't help but
                notice. Transform your website into something you and your
                customers or clients will love.
              </p>
              <hr />
            </div>
            <div className="project-term-single-part">
              <h3>Real, successful.</h3>
              <p>
                Replatform or relaunch your e-commerce websites with real
                results. From day one, we listen to your goals and help you make
                them a reality.
              </p>
              <hr />
            </div>
            <div className="project-term-single-part">
              <h3>Your new partners.</h3>
              <p>
                We take a relationship-centric approach to our work, and will
                never make you feel like simply a transaction. Our projects are
                partnerships and as such we are here to assist you along the
                way, refining where necessary to create the best possible
                experience for your customers.
              </p>
              <hr />
            </div>
          </div>
          <div className="col-md-6 term-right-part">
            <h5>Project: TIEM Sneakers</h5>
            <img
              src={project_term}
              alt=""
              className="img-fluid filter-dropshadow"
            />
          </div>
        </div>
      </div>

      <Services 
        title='Creating for creators.'
        col_1_title='Who we are'
        col_2_title='What we do'
        col_3_title='Why we do it'
        col_1_des='QuadBit Technologies is an award winning web development & creative
        design company.'
        col_2_des='We create and maintain pixel perfect web creations for clients all over the world.'
        col_3_des='We tried out for the football team and got cut. So we learned how to make websites.'
        img1={serviceimg1}
        img2={serviceimg2}
        img3={serviceimg3}

      />

              <Contact/>

              <Footer/>




    </div>
  );
}

export default Home;
