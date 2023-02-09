import React from 'react'


import CardBT from '../CardBT/CardBT';


function ItemList(props) {
  return (
    <>
    
    {props.products.map((product) => (
        <CardBT
        id={product.id}
        productImg={product.productImg}
        cardTitle={product.cardTitle}
        price={product.price}
        textButton={product.textButton}
        stock={product.stock}
        discount={product.discount}
        />
    ))}
    </>
    )
}

export default ItemList