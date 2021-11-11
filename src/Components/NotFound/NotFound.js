import React from 'react';
import error from '../images/page404.jpg'

const NotFound = () => {
    return (
        <div>
            <div  className="text-center sm={1}">
            <h3>This page is error</h3>
            <img className="img-fluid img-thumbnail" src={error} alt="" />
        </div>
        </div>
    );
};

export default NotFound;