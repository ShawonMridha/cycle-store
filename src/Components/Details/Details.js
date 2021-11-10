import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';

const Details = () => {
    const{id}= useParams();
    const[service, setService]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const place = data;
        place.neme = service;
        // console.log(place);
        fetch('',{
           method:'post',
           headers:{
             'content-type':'application/json'
           },
           body:JSON.stringify(data),
        })
        .then(res =>res.json())
        .then(result=>{
          // console.log(result);
          alert('Submited successfully');
          reset()
        })
    }
    return (
        <div>
            <h2>details id: {id}</h2>
            <h2>Price: {service.price}</h2>
            <p>Price: {service.description}</p>
            <img className="w-25 mb-5" src={service.img} alt="" />

            <form className="md={2} sm={1}" onSubmit={handleSubmit(onSubmit)}>
              <input className="w-75"  {...register("name", { required: true, maxLength: 20 })}  placeholder="name" required/>
              <input className="w-75" type="email" {...register("email")}  placeholder="email" required />
              <input className="w-75" type="number" {...register("number")} placeholder="number" required />
              <textarea className="w-75" {...register("description")} placeholder="Address" required/>
              <input className="w-75" type="submit" />
            </form>
        </div>
    );
};

export default Details;