import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { getItems } from '../../services/categories';
import { CartWidget } from '../CartWidget/CartWidget';
import NavLink from '../NavLink/NavLink';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function NavBarBT({logo}) {

    const [category, setCategory]= useState([]);
    getItems().then((data)=>{
        setCategory(data);
    })

    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <img
                        alt="logo"
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        />
                        Stunning
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="">Home</Nav.Link>    
                        {category.map((category) => (
                            <NavLink
                                category={category.category}
                            />
                        ))};
                    </Nav>
                    
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}