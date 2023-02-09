import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from '../../services/fireBase';
import Loader from "../Loader/Loader";

function OrderDetails() {
    const { orderid } = useParams();
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getOrderDetails(orderid).then((response) => {
            setOrder(response);
        }).catch((error) => {
            alert(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [orderid]);


    return (
        <>
            {isLoading? (
                <Loader/>
            ):
            (
                <div>
                    <h1>Order Details</h1>
                    <h2>Order ID: {order.id}</h2>
                    <h2>Buyer: {order.buyer.name}</h2>
                    <h2>Email: {order.buyer.email}</h2>
                </div>
            )}
        </>
    );
}

export default OrderDetails;