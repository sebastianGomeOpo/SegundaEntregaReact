import React ,{useState,useEffect}from 'react'
import { getSingleItem } from '../../services/fireBase';
import { useParams } from 'react-router-dom';
import DetailCardBT from '../DetailCardBT/DetailCardBT';



export function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    // Desafio 10 Agregar al carrito
  

  
    // Obtenemos el id del producto con useParams
    let {itemid} = useParams();
    // console.log(itemid);

    // 1. Creamos Context
    // const context = useContext(cartContext);
    // const cart = context.cart;
    // EL PROLIJO LO HACE ASI:
    // const cart = useContext(cartContext).cart;



useEffect(() => {
  // 2. Llamamos a la función getSingleItem y le pasamos el id del producto
  getSingleItem(itemid).then((respuesta) => {
    setProduct(respuesta);
  })
  .catch((error) => alert(`Error: ${error}`));
}, []);



return (
      <>
        <DetailCardBT
          id = {product.id}
          urlImg={product.productImg}
          titulo={product.cardTitle}
          precio={product.price}
          descripcion={product.description}
          stock={product.stock}
        />
        
      </>
    );
  }
  

