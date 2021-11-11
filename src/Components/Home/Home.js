import React from 'react';
import Banner from '../../Banner/Banner';
import Data from '../Data/Data';
import Event from '../Event/Event';
import ReviewDetails from '../Review/ReviewDetails';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Data></Data>
            <ReviewDetails></ReviewDetails>
            <Event></Event>
        </div>
    );
};

export default Home;