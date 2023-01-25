import React from 'react'
import { Flexwrapper } from '../FlexWrapper/FlexWrapper';
import CardBT from '../CardBT/CardBT';


function ItemList(props) {
  return (
    <Flexwrapper>
    {props.products.map((product) => (
        <CardBT
        key={product.id}
        id={product.id}
        productImg={product.productImg}
        cardTitle={product.cardTitle}
        price={product.price}
        description={product.description}
        />
    ))}
    </Flexwrapper>

    )
}

export default ItemList