import {Flexwrapper} from '../FlexWrapper/FlexWrapper';
import {Item }from "../Item/Item";
import "./ItemListContainer.css";




export function ItemListContainer(props) {
    const {greeting} = props;
    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <Flexwrapper>
                <Item
                imgurl="../../assets/img/stickerStunning.webp"
                tittle="Pantalon 1"
                price="1000"
                />
                <Item
                imgurl="../../assets/img/stickerStunning.webp"
                tittle="Pantalon 2"
                price="1000"                    
                />

            </Flexwrapper>
        </div>
    );
}