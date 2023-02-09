import React,{useState,useContext} from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { cartContext } from '../../storage/CartContext';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DetailCardBT(item) {
    const {urlImg,titulo,precio,descripcion,stock,id} = item;
    const [isInCart, setIsInCart] = useState(false);
    const {addItem} = useContext(cartContext);
    
    // Funcion carrito 
    function handleAddToCart(count) {
        setIsInCart(true);
        const notify = () => toast.success(`Agregaste ${count} ${titulo} al carrito`);
        notify();
        // alert(`Agregaste ${count} ${titulo} al carrito`);
        // 2. Creamos el objeto producto
        const item = {
            id: id,
            title: titulo,
            price: precio,
            pictureUrl: urlImg,
            count: count
        }
        // 3. Llamamos a la función addItem y le pasamos el producto y la cantidad;
        addItem(item);
    }

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
                        stock={stock}
                        onAddToCart={handleAddToCart}
                        isInCart={isInCart}
                    />
                    <ToastContainer />
                </Card>
            </Col>
        </Row>
    </Container>
)
}

export default DetailCardBT