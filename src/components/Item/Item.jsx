import React from 'react';
import './Item.css';


export function Item(props){
    const{tittle, price, imgurl} = props;
    return(
        <div className='item'>
            <div>
                <img src={imgurl} alt='imagen'>

                </img>
            </div>
            <h3>
                {tittle}
            </h3>
            <h4>
                {price}
            </h4>
            <p>
                {"Compra ya!"}
            </p>
        </div>
    );
}