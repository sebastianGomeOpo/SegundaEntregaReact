import React,{useState,useEffect} from 'react';

import {Flexwrapper} from '../FlexWrapper/FlexWrapper';
import {getItems, getItemsByCategoryid} from '../../services/fireBase';

import { useParams } from 'react-router-dom';
import Notificaction from '../Notification/Notificaction';
import Loader from '../Loader/Loader';
import ItemList from '../ItemList/ItemList';

export function ItemListContainer() {
    const [products, setProducts]= useState([]);
    const[isLoading,setIsLoading]=useState(true);

    const[notification,setNotification]=useState({
        type:"info",
        text:"Cargando productos...",
    });

    const {categoryid} = useParams();
    //console.log(categoryid);

    async function getProducts() {
        if (!categoryid) {
            try {
            let response = await getItems();
            setProducts(response);
            setNotification({
                type: "success",
                text: `Se cargaron ${response.length} productos correctamente...`,
            });
            } catch (error) {
            alert(error);
            setNotification({
                type: "danger",
                text: `Error cargando los productos: ${error}`,
            });
            }finally{
            setIsLoading(false);
        }
        }else {
            let response = await getItemsByCategoryid(categoryid);
            setProducts(response);
            setIsLoading(false);
            
        }
    }
    
    // useEffect se ejecuta cuando se monta el componente
    // El useEffect tiene que observar el categoryid
    useEffect(() => {
        getProducts();
        // por defecto el useEffect se ejecuta cuando se monta el componente ,si queremos que se ejecute solo cuando se monta el componente,le pasamos un array vacio
        // si queremos que se ejecute cuando se monta el componente y cuando se actualiza el componente y cuando se desmonta el componente le pasamos un array con las variables que queremos que observe el useEffect para ejecutarse cuando cambien de valor (en este caso categoryid) y una funcion que se ejecuta cuando se desmonta el componente
    },[categoryid]);

    return (
        <>
            {notification.type && <Notificaction 
            type={notification.type}
            text={notification.text}
            />}
            <Flexwrapper>
            {isLoading ? (
                <Loader/>
            ):( 
                <ItemList
                products={products}
                />
            )}
            </Flexwrapper>
        </>
);
}
