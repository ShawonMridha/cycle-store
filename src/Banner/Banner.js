import React from 'react';
import { Carousel } from 'react-bootstrap';
import cycle1 from '../Components/images/cycle1.jpg'
import cycle2 from '../Components/images/cycle2.jpg'
import cycle3 from '../Components/images/cycle3.jpg'

const Banner = () => {
    return (
        <>
             <Carousel fade className=''>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cycle1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>service for everyone Customer</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cycle2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>service for everyone Customer</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cycle3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>service for everyone Customer</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;