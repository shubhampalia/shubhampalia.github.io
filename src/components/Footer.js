import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <t style={{ color: 'white' }}> Shubham Palia </t>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/shubham-palia-0b5685176/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/shubham.palia.35/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/shubhampalia/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <p>This website is still under maintenance, 
              some of the features are intentially kept off. Please reach out using linkedin. Thank you.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
