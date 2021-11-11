import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css'

  

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{admin, logout}= useAuth();
    console.log(admin)
    return (
        <>

<Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">Admin And User</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end color">
            {admin?
                <div>
                <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
               <Link to={`${url}/addProduct`}>Add A Product</Link>
               <Link to={`${url}/makeAdmin`}>Make Admin</Link>
               <Link to={`${url}/manageProduct`}>Manage Products</Link>
               
                <button onClick={logout}>Logout</button>
                
                </div>
               :
               <div>
            <Link to={`${url}/rendering`}>Dashboard</Link>
            <Link to={`${url}/pay`}>Pay</Link>
            <Link to={`${url}/myOrders`}>My Orders</Link>
            <Link to={`${url}/review`}>Review</Link>
           
             <button onClick={logout}>Logout</button>
           
               </div>
               
             }
            
            </Navbar.Collapse>
                </Container>
         </Navbar>



            <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/pay`}>
            <Pay></Pay>
        </Route>
        <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
            <Review></Review>
        </Route>
        <Route path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageProduct`}>
           <ManageProduct></ManageProduct>
        </Route>
        
      </Switch>
        </>
    );
};

export default Dashboard;



          