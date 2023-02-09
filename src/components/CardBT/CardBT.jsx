import Card from 'react-bootstrap/Card';
import DetailBT from '../DetailBT/DetailBT';
// import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function CardBT(props) {
    const{productImg,cardTitle,price,id,stock,discount}=props ;


    return (
        <Card style={{ width: '20rem' }} 
        bg={'light'}
        border={'primary'}
        className="text-center">
        <Card.Img variant="top"  xs={2} src={productImg} />
        <Card.Header as ="h5">{cardTitle}</Card.Header>
        <Card.Body>
            <Card.Title> {`Precio $${price}`}</Card.Title>
            <Button>
                Stock <Badge bg="secondary">{stock}</Badge>
            </Button>
            { discount? 
            <Card.Text style={{color:"green"}}>
                Descuento del {`${discount}`} %
            </Card.Text>
            :
            <></>
            }
        </Card.Body>
        <DetailBT
        id={id}
        />
        </Card>
    );
}

export default CardBT;