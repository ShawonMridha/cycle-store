import React from 'react';
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

  

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const{admin}= useAuth();
    return (
        <div>
            <h3>This is Dashboard</h3>
            <Link to={`${url}/rendering`}>Dashboard</Link>
            <Link to={`${url}/pay`}>Pay</Link>
            <Link to={`${url}/myOrders`}>My Orders</Link>
            <Link to={`${url}/review`}>Review</Link>
            <Link to={`${url}/logout`}>Logout</Link>
            <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
            <Link to={`${url}/addProduct`}>Add A Product</Link>
            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
            <Link to={`${url}/manageProduct`}>Manage Products</Link>



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
        </div>
    );
};

export default Dashboard;