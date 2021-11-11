import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AddedDesign = (props) => {
    const{img, name, description, price}=props.product;
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

export default AddedDesign;