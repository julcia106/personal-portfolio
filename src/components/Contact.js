import { useState, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';

export const Contact = () => {
 const formInitialDetails = {
  first_name: '',
  last_name: '',
  email_address: '',
  phone_number: '',
  message: ''
 }

 const [formDetails, setFormDetails] = useState(formInitialDetails);
 const [buttonText, setButtonText] = useState('Send');
 const [status, setStatus] = useState({});
 const form = useRef();

 const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
 const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
 const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

 const onFormUpdate = (category, value) => {
  setFormDetails({
   ...formDetails,
   [category]: value
  })
 }

 const sendEmail = (e) => {
  e.preventDefault();
  setButtonText('Sending...');

  emailjs.sendForm(serviceId, templateId, form.current, publicKey)
   .then((result) => {
    setStatus({ success: true, message: 'Message sent successfully' });
    setButtonText('Send');
    setFormDetails(formInitialDetails);
   }, (error) => {
    setStatus({ success: false, message: 'Something went wrong, please try again later.' })
   });

  setTimeout(() => {
   setStatus({});
  }, 3000);

 };

 return (
  <section className="contact" id="contact">
   <Container>
    <Row className="align-items-center">
     <Col md={6}>
      <img src={contactImg} alt="Contact Us" />
     </Col>
     <Col md={6}>
      <h2>Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail}>
       <Row>
        <Col sm={6} className="px-1">
         <input type="text" name="first_name" value={formDetails.first_name} placeholder="First Name" onChange={(e) => onFormUpdate('first_name', e.target.value)}></input>
        </Col>
        <Col sm={6} className="px-1">
         <input type="text" name="last_name" value={formDetails.last_name} placeholder="Last Name" onChange={(e) => onFormUpdate('last_name', e.target.value)}></input>
        </Col>
        <Col sm={6} className="px-1">
         <input type="email" name="email_address" value={formDetails.email_address} placeholder="Email Address" onChange={(e) => onFormUpdate('email_address', e.target.value)}></input>
        </Col>
        <Col sm={6} className="px-1">
         <input type="tel" name="phone_number" value={formDetails.phone_number} placeholder="Phone No." onChange={(e) => onFormUpdate('phone_number', e.target.value)}></input>
        </Col>
        <Col className="px-1">
         <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
         {
          status.message &&
          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>

         }
         <button type="submit"><span>{buttonText}</span></button>
        </Col>
       </Row>
      </form>
     </Col>
    </Row>
   </Container>
  </section>
 )
}