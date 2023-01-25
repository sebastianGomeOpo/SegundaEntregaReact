import Card from 'react-bootstrap/Card';
import DetailBT from '../DetailBT/DetailBT';
import ItemCount from '../ItemCount/ItemCount';


function CardBT(props) {
    const{productImg,cardTitle,price,id,onAddToCart}=props ;


    return (
        <Card style={{ width: '18rem' }} 
        bg={'light'}
        border={'primary'}>
        <Card.Img variant="top" src={productImg} />
        <Card.Header>{cardTitle}</Card.Header>
        <Card.Body>
            <Card.Title>{`${price}`}</Card.Title>
        </Card.Body>
        <ItemCount
            onAddToCart={onAddToCart}
        />
        <DetailBT
        id={id}
        />
        </Card>
    );
}

export default CardBT;