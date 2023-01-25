import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


function DetailCardBT({urlImg,titulo,precio,descripcion,onAddToCart}) {
    return (
    <Container>
        <Row>
            <Col className='d-flex align-items-center justify-content-center'>
                <Figure>
                    <Figure.Image
                        width={'100%'}
                        height={'100%'}
                        alt="producto"
                        src={urlImg}
                    />
                </Figure>
            </Col>
           
            <Col>
                <Card style={{ width: '18rem' }} 
                bg={'light'}
                border={'primary'}>
                    <Card.Header>{titulo}</Card.Header>
                    <Card.Body>
                        <Card.Title>{`${precio}`} </Card.Title>
                        <Card.Text>
                            {`${descripcion}`}
                        </Card.Text>
                    </Card.Body>
                    <ItemCount
                        onAddToCart={onAddToCart}
                    />
                </Card>
            </Col>
        </Row>
    </Container>
)
}

export default DetailCardBT