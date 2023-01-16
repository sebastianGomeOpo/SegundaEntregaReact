import React,{useState,useEffect} from 'react';
import CardBT from '../CardBT/CardBT';
import {Flexwrapper} from '../FlexWrapper/FlexWrapper';
import {getItems, getItemsByCategoryid} from '../../services/mockAsyncServices';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

export function ItemListContainer() {
    const [products, setProducts]= useState([]);

    const {categoryid} = useParams();
    console.log(categoryid);

    useEffect(() => {
        if(categoryid){
            getItemsByCategoryid(categoryid).then((data)=>{
                //console.log(data)
                setProducts(data);
            });
        }else{
            getItems().then((data)=>{
                setProducts(data);
            });
        }
    },[categoryid]);

    return (
            <Flexwrapper>
            {products.map((product) => (
                <Row
                className="mt-4" 
                >
                    <CardBT 
                    key={product.id}
                    id={product.id}
                    productImg={product.productImg}
                    cardTitle={product.cardTitle}
                    price={product.price}
                    description={product.description}
                    textButton={product.textButton}
                    ></CardBT>
                </Row>
                    
                ))};
            </Flexwrapper>
    );
}
