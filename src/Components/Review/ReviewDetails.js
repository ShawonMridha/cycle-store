import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewShow from '../ReviewShow/ReviewShow';

const ReviewDetails = () => {
    const[review, SetReview]=useState([]);
    useEffect(()=>{
        fetch('https://guarded-everglades-58080.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>SetReview(data))
    },[])
    return (
        <div className="m-5">
             <Container>
                <h3 className="demo mt-5 text-primary">Added Review: </h3>
            <Row xs={1} md={3} className="g-4">
              {
              review.map(addservices=> <ReviewShow  review={addservices}  ></ReviewShow>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default ReviewDetails;