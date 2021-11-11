import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DataReview from '../DataReview/DataReview';
import Show from '../Show/Show';

const Explore = () => {
    const[allData, setAllData]= useState([]);
    useEffect(()=>{
        fetch('https://guarded-everglades-58080.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo mt-5 text-primary">SERVICE ITEMS:</h3>
            <Row xs={1} md={3} className="g-4">
              {
              allData.map(card=> <Show key={card._id} cards={card}></Show>)
              }
           </Row>
            </Container>
           <DataReview></DataReview>
        </div>
    );
};

export default Explore;