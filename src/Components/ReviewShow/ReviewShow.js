import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ReviewShow = (props) => {
    const{img, name, description, price}=props.review;
    return (
        <div>
            <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={img} />
               <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
               <Card.Text>
              {description}
              </Card.Text>
              <h3> Price: {price}</h3>
             </Card.Body>
             </Card>
        </Col>
        </div>
    );
};

export default ReviewShow;