import React ,{useState,useEffect, useContext}from 'react'
import { getSingleItem } from '../../services/mockAsyncServices';
import { useParams } from 'react-router-dom';
import DetailCardBT from '../DetailCardBT/DetailCardBT';
import { cartContext } from '../../storage/CartContext';


export function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    // Obtenemos el id del producto con useParams
    let {itemid} = useParams();

    // 1. Creamos Context
    // const context = useContext(cartContext);
    // const cart = context.cart;
    // EL PROLIJO LO HACE ASI:
    // const cart = useContext(cartContext).cart;

const {addItem} = useContext(cartContext);

    // Funcion carrito 
    function handleAddToCart(count){
      alert(`Agregaste ${product.cardTitle} al carrito`);
      product.count = count;
      addItem(product);
    }


    useEffect(() => {
      // 2. Llamamos a la función getSingleItem y le pasamos el id del producto
      getSingleItem(itemid).then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
    });
  
    return (
      <>
        <DetailCardBT
          urlImg={product.productImg}
          titulo={product.cardTitle}
          precio={product.price}
          descripcion={product.description}
          onAddToCart={handleAddToCart}
        />
        
      </>
    );
  }
  

