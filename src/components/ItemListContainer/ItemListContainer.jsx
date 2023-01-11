import CardBT from '../CardBT/CardBT';
import {Flexwrapper} from '../FlexWrapper/FlexWrapper';
import {Item }from "../Item/Item";
import "./ItemListContainer.css";




export function ItemListContainer(props) {
    const {greeting} = props;
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <Flexwrapper>
            <CardBT
                productImg='../../assets/img/stickerStunning.webp'
                cardTitle='Pantalon1'
                price='5000'
                description='Lorem Ipsum'
                textButton='Compra'
                ></CardBT>
                                <CardBT
                productImg='../../assets/img/stickerStunning.webp'
                cardTitle='Pantalon1'
                price='5000'
                description='Lorem Ipsum'
                textButton='Compra'
                ></CardBT>
                <CardBT
                productImg='../../assets/img/stickerStunning.webp'
                cardTitle='Pantalon1'
                price='5000'
                description='Lorem Ipsum'
                textButton='Compra'
                ></CardBT>
                                <CardBT
                productImg='../../assets/img/stickerStunning.webp'
                cardTitle='Pantalon1'
                price='5000'
                description='Lorem Ipsum'
                textButton='Compra'
                ></CardBT>
                                <CardBT
                productImg='../../assets/img/stickerStunning.webp'
                cardTitle='Pantalon1'
                price='5000'
                description='Lorem Ipsum'
                textButton='Compra'
                ></CardBT>
            </Flexwrapper>
        </div>
    );
}