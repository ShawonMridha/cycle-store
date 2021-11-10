import React from 'react';
import { Container } from 'react-bootstrap';
import event from '../images/events.jpg'

const Event = () => {
    return (
        <div>
            <Container>
                <h3 className="text-primary">Our Events Upcoming: </h3>
                <h1>50% Discount</h1>
            <img className="w-50" src={event} alt="" />
            </Container>
        </div>
    );
};

export default Event;