import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const{user, logout}=useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Cycle Store</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end color">
                    <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        {user?.email ?
                          
                        <Nav.Link as={Link} to="">
                           <button onClick={logout}>Logout</button>
                        </Nav.Link>
                          :
                          <Nav.Link as={Link} to="/login">
                           <button onClick={logout}>Login</button>
                        </Nav.Link>
                        }
                        <Navbar.Text>
                            {/* Signed in as: <a href="/login">{ <span>{user.displayName}</span>}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;