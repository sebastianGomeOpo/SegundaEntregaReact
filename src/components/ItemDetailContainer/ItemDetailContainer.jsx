import React ,{useState,useEffect}from 'react'
import { getSingleItem } from '../../services/mockAsyncServices';
import { useParams } from 'react-router-dom';
import DetailCardBT from '../DetailCardBT/DetailCardBT';


export function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    // Obtenemos el id del producto con useParams
    let {itemid} = useParams();
    console.log(itemid);

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
        />
        
      </>
    );
  }
  

