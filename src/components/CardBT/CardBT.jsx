import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

function CardBT(props) {
    const{productImg,cardTitle,price,description}=props ;
    return (
        <Card style={{ width: '18rem' }} 
        bg={'light'}
        border={'primary'}>
        <Card.Img variant="top" src={productImg} />
        <Card.Header>{cardTitle}</Card.Header>
        <Card.Body>
            <Card.Title>{`${price}`}</Card.Title>
            <Card.Text>
                {`${description}`}
            </Card.Text>
        </Card.Body>
        <ItemCount/>
        </Card>
    );
}

export default CardBT;