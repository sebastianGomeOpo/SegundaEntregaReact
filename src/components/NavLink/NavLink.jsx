import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function NavLink({category}) {
    const urlDetail=`/category/${category}`;
    
    return (
        <Nav.Link as={Link} to={urlDetail}>{category}</Nav.Link>                                        
    )
}

export default NavLink