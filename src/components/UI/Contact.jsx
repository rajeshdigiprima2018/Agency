import React from 'react'
import "../../styles/contact.css";
import Form from "../UI/Form.jsx";

import { Container,Row,Col } from 'reactstrap';

const Contact = () => {
  return (
    <section className='contact'>
    <Container>
        <Row>
        <Col lg='12' className='mb-5'>
            <h6 className='subtitle'>Get In Touch</h6>
            {/* <h2>Explore the <span className='highlight'>hidden</span>ideas and subscribe!</h2> */}
        </Col>
        
        <Col lg='6' md='6'>
        <div className='contact_info-container d-flex align-items-center gap-5'>
          <div className='single_info-box w-50'>
            <h6>Address</h6>
            <p>India</p>
          </div>

          <div className='single_info-box w-50'>
            <h6>Phone</h6>
            <p>+91 123456789</p>
          </div>
        </div>
        </Col>

        
        <Col lg='6' md='6'>
        <div className='contact_info-container d-flex align-items-center gap-5'>
          <div className='single_info-box w-50'>
            <h6>Email</h6>
            <p>info@gmail.com
               ab@gmail.com 
            </p>
          </div>

          <div className='single_info-box w-50'>
            <h6>Location</h6>
            <p>India</p>
          </div>
        </div>
        </Col>
        
        <Col lg='6' md='6'>
        <Form />
        </Col>
          
       
      </Row>
      </Container>

              
          
    </section>
    
  )
}

export default Contact
