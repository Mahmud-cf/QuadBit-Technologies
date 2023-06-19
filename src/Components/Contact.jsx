import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaStarOfLife } from 'react-icons/fa';
import rocket from '../assets/rocket.png'
import bg_dots from '../assets/bg-dots.png'

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [howDidYouFindUs, setHowDidYouFindUs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container-fluid" id="contact">
      <div className="contact-wrappr">
        <Form onSubmit={handleSubmit}>
          <h5 className="get-in-tuch">Get in touch with us!</h5>
          <h2 className="text-center">
            <span>Contact Us</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .changeDelay(10)
                  .typeString("")
                  .callFunction(() => {})
                  .pauseFor(100)
                  .start();
              }}
            />
          </h2>

          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label><FaStarOfLife/>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label><FaStarOfLife/>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="company">
            <Form.Label>Company</Form.Label><FaStarOfLife/>
            <Form.Control
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Current Website</Form.Label>
            <Form.Control
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label><FaStarOfLife/>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label><FaStarOfLife/>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="service">
            <Form.Label>Select Service</Form.Label><FaStarOfLife/>
            <Form.Control
              as="select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Design">Web Design</option>
              <option value="Network Engineer">Network Engineer</option>
              <option value="Server Configuration">Server Configuration</option>
              <option value="Hosting Management">Hosting Management</option>
              <option value="Wordpress">Wordpress</option>
              <option value="Shopify">Shopify</option>
              <option value="Woocommerce">Woocommerce</option>
              <option value="BigCommerce">BigCommerce</option>
              <option value="Wix">Wix</option>
              <option value="Wordpress Plugin Development">
                Wordpress Plugin Development
              </option>
              <option value="Video Editing">Video Editing</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="UI/UX">UI/UX</option>
              <option value="3D Modeling">3D Modeling</option>
              <option value="Something else">Something else</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="howDidYouFindUs">
            <Form.Label>How did you find us?</Form.Label><FaStarOfLife/>
            <Form.Control
              type="text"
              value={howDidYouFindUs}
              onChange={(e) => setHowDidYouFindUs(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <span>Submit</span>
            <img src={rocket} alt="" />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
