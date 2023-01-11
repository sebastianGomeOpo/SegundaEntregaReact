import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBarBT(props) {
    const {logo}=props;
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt="logo"
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        />{' '}
                        Stunning
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}