import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaStarOfLife } from 'react-icons/fa';
import rocket from '../assets/rocket.png'
import Navigation from '../Components/Navigation'
import logo from '../assets/logo.png'
import './Login.css'

function Login() {

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
    <div className='login-page-wrapper' >
        <Navigation logo1={logo} logo2={logo} />
        <div className="container-fluid" id="contact">
      <div className="contact-wrappr">
        <Form onSubmit={handleSubmit}>
          <h5 className="get-in-tuch">Connect with us!</h5>
          <h2 className="text-center">
            <span>Sign Up</span>
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
          
          <Button variant="primary" type="submit">
            <span>Submit</span>
            <img src={rocket} alt="" />
          </Button>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default Login