import { createContext, useEffect, useState} from 'react'

export const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const[price,setPrice] = useState(0);
    console.log("que hay en el carrito",cart)

    useEffect(() => {
        setTotal(handleTotal());
        setPrice(handlePrice());
    }, [cart, handlePrice, handleTotal]);

    function addItem(item) {
        // let newCart = cart.map(item => item)
        // let newCart = [...cart];
        // newCart.push(item);
        // setCart(newCart);
        // setCart([...cart,item]);
        
        //Version 1.1
        const isInCart = cart.some((itemIncart) => itemIncart.id === item.id);

        if (isInCart) {
            const newCart = cart.map((itemIncart) => {
                if (itemIncart.id === item.id) {
                    return { ...itemIncart, count: itemIncart.count + item.count };
                } else {
                    return itemIncart;
                }
            });
            setCart(newCart);
        }
        else {
            setCart([...cart, item]);
        }
    
    };
        
    function removeItem(item){
        const isInCart = item => cart && cart.some(element => element.item.id === item.id);
        if(isInCart(item)){
            let cartElements = cart.filter((element)=> element.item.id !== item.id)||[];
            setCart([...cartElements]);
        }
    };

    function clearCart(){
        setCart([])
    };

    function getTotalItem(){
        let total = cart.reduce((acc,item)=> acc + item.count,0);
        return total;
    };

    function getTotalPrice(){
        let totalPrice = cart.reduce((acc,item)=> acc + item.count * item.price,0);
        return totalPrice;
    };


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleTotal(){
        let total = cart.reduce((acc,item)=> acc + item.count,0);
        return total;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handlePrice(){
        let totalPrice = cart.reduce((acc,item)=> acc + item.count * item.price,0);
        return totalPrice;
    };

    // No funciona , es mejor usar el useState
    // let otroValor="hola";
    // console.log("mi carrito",cart);
    const value = {cart,addItem,removeItem,clearCart,getTotalItem,getTotalPrice,total,price};

    return (
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    );
};




