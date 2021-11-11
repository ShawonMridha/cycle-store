import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderShow from '../OrderShow/OrderShow';

const MyOrders = () => {
    const{user}=useAuth();
    const[order, setOrder] = useState([])
    useEffect(()=>{
        fetch('https://guarded-everglades-58080.herokuapp.com/client')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    // console.log(order)
    const single = order.filter(getItem=>getItem.email===user.email);
    // console.log(single)
    const handleDelete = id =>{
        const url = `https://guarded-everglades-58080.herokuapp.com/client/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                window.confirm('you want to delete???')
            const remaining = order.filter(service =>service._id !==id);
            setOrder(remaining);
            }
            
        })
    }
    return (
        
        <div>      
               <Container>
            <Row xs={1} md={3} className="g-4">
              {
              single.map(card=> <OrderShow key={card._id} cards={card}
                handleDelete={handleDelete}
              >

              </OrderShow>)
              }
           </Row>
            </Container>       
        </div>
    );
};

export default MyOrders