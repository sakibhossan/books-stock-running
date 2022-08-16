import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../Images/Banner/book-1.png';
import Banner2 from '../../../Images/Banner/book-21.png';
import Banner3 from '../../../Images/Banner/book-3.png';


const Baner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Baner;