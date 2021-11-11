import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddedDesign from '../AddedDesign/AddedDesign';

const DataReview = () => {
    const[product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://guarded-everglades-58080.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo mt-5 text-primary">Added Product:</h3>
            <Row xs={1} md={3} className="g-4">
              {
              product.map(card=> <AddedDesign key={card._id} product={card}></AddedDesign>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default DataReview;