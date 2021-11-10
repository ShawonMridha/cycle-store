import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare ,faInstagramSquare,faTwitterSquare,faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-color">
             <Container>
 <Row className="p-5">
    <Col sm >
    <h5 className="color">Social Links</h5>
   <div className="icon">
   
               <div className="flex">
                <FontAwesomeIcon  icon ={faInstagramSquare} />
                </div>
               <div className="flex">
                <FontAwesomeIcon  icon ={faFacebookSquare} />
                </div>
               
                <div className="flex">
                <FontAwesomeIcon  icon ={faTwitterSquare} />
                </div>

                <div className="flex">
                <FontAwesomeIcon  icon ={faYoutube} /> 
                </div>
        </div> 
    </Col>
   
    <Col sm>
    <h5 className="color">Helpful Links</h5>
     <p>Service</p>
     <p>Supports</p>
     <p>Term & condition</p>
    </Col>
    
    <Col sm>
    <h5 className="color">Address</h5>
     <p>127,Dhanmondi</p>
     <p>phone: 349583458</p>
     <p>Email: shawon567@gmail.com</p>
     
    </Col>
  </Row>
 
 </Container>
        </div>
    );
};

export default Footer;