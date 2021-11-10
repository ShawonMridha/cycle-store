import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const[loginData, setLoginData] = useState({});
    const{user, registerUser, isLoading, authError} = useAuth();


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        // console.log(newLoginData)
        setLoginData(newLoginData);
    }
    


    const handleLoginSubmit= e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password didnt match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
        // console.log( loginData.email)
    }

    return (
        <div>
           { !isLoading &&<Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onBlur={handleOnBlur} name="name"/>
  </Form.Group>
  <Form.Group className="mb-3 w-50" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur} name="email"/>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onBlur={handleOnBlur} name="password"/>
  </Form.Group>
  <Form.Group className="mb-3 w-50" controlId="formBasicPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onBlur={handleOnBlur} name="password2" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Link to="/login">New User? Please Register</Link>
</Form>}
{isLoading && <Spinner animation="border" variant="danger" />}
{/* {user?.email && alert('User Create Successfully!')} */}
{/* {authError && alert('Already use')} */}
        </div>
    );
};

export default Register;