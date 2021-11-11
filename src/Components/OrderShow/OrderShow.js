import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const OrderShow = (props) => {
    const{name,email,description,number}=props.cards;
    
    return (
        <div className="mb-5 mt-5">
             <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={name.img} />
               <Card.Body>
              <Card.Title> </Card.Title>
               <Card.Text>
                 <h5>Name: {name.price}</h5>
                 <h5>Email: {email}</h5>
                 <h5>Number: {number}</h5>
                 <h5>Address: {description}</h5>
              </Card.Text>
             </Card.Body>
             <Button onClick={()=>props.handleDelete(props.cards._id)}>Delete</Button>
             </Card>
      
    </Col>
        </div>
    );
};

export default OrderShow;