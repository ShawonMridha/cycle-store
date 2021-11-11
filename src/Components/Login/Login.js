import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const[loginData, setLoginData] = useState({});
    const{loginUser,signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit= e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    const handleGoogleSignIn = ()=>{
      signInWithGoogle(location, history)
    }
    return (
        <div className="text-center">
<Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onBlur={handleOnchange} name="email"/>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onBlur={handleOnchange} name="password"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Link to="/register">New User? Please Register</Link>
</Form>
 <p>--------------------------</p>
 <Button onClick={handleGoogleSignIn}> Google Sign In</Button>
        </div>
    );
};

export default Login;