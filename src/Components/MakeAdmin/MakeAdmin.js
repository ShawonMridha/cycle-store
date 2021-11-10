import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const[email,setEmail]= useState('');
    const[success, setSuccess] = useState(false);

    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true)
            }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h3>this is MakeAdmin page</h3>
            <Form onSubmit={handleAdminSubmit}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur} />
    <Button type="submit">Make Admin</Button>

  </Form.Group>
</Form>
{/* {success && alert('Made Admin succeessfully')} */}
        </div>
    );
};

export default MakeAdmin;