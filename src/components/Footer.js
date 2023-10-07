import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
 return (
  <footer className="footer">
   <Container>
    <Row className="align-item=center">
     <Col sm={6}>
     </Col>
     <Col sm={6} className="text-center text-sm-end pt-5">
      <div className="social-icon">
       <a href="https://www.linkedin.com/in/julia-rutkowska-184b24209" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
       <a href=""><img src={navIcon2}></img></a>
       <a href=""><img src={navIcon3}></img></a>
      </div>
      <p>Copyright 2023. All Right Reserved</p>
     </Col>
    </Row>
   </Container>
  </footer>
 )
}

// newsletter-bx