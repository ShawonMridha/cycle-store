import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CartManage from '../CartManage/CartManage';


const ManageAllOrders = () => {
    const[order, setOrder]= useState([])
    useEffect(()=>{
        fetch('https://guarded-everglades-58080.herokuapp.com/client')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    console.log(order)
    return (
        <div>
             <Container>
            <Row xs={1} md={3} className="g-4">
              {
              order.map(card=> <CartManage key={card._id} cards={card}
              >

              </CartManage>)
              }
           </Row>
            </Container> 
        </div>
    );
};

export default ManageAllOrders;


// order.map(card=> 
    {/* {<img src={card.name.img} alt="" />} */}