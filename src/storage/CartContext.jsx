import { createContext, useState } from 'react'

export const cartContext = createContext()

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addItem(item) {
        // let newCart = cart.map(item => item)
        // let newCart = [...cart];
        // newCart.push(item);
        // setCart(newCart);
        setCart([...cart,item]);
    }

    // No funciona , es mejor usar el useState
    let otroValor="hola";
    console.log("mi carrito",cart);
    const value = {cart,otroValor,addItem}
    return (
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}

