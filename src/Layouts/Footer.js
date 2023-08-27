import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../Components/MailchimpForm";
import { House, FileEarmarkFill,PhoneFill } from 'react-bootstrap-icons';


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <MailchimpForm />
          <Col size={12} sm={3}>
            <img src='assets/logo.png' alt="Logo" />
          </Col>
          <Col size={12} sm={3}>
            <h4>Product</h4>
            <ul style={{listStyle:'none',padding:'0'}}>
              <li><a href='#projects'>Porfolio</a></li>
              <li><a href='#projects'>kidgarden Management System</a></li>
              <li><a href='#projects'>Hotel Management System</a></li>
              <li><a href='#projects'>BlockChain Web</a></li>
            </ul>
          </Col>
          <Col size={12} sm={3}>
            <h4>Contact Us</h4>
            <p><House size={15}/> New York, NY 10012, US</p>
            <p><FileEarmarkFill size={15}/> info@example.com</p>
            <p><PhoneFill size={15}/> + 01 234 567 88</p>
            <p><PhoneFill size={15}/> + 01 234 567 89</p>
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-start">
            <div className="social-icon">
              <h4>Follow us</h4>
              <a href="a"><img src='assets/facebook.svg' alt="Icon" /></a>
              <a href="a"><img src='assets/instagram.svg' alt="Icon" /></a>
              <a href="a"><img src='assets/twitter.svg' alt="Icon" /></a>
              <a href="a"><img src='assets/github.svg' alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;

