import {useContext,useEffect,useState} from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {cartContext} from '../../storage/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function CartWidget () {
  // Obtengo del contexto la cantidad de items
  const {getTotalItem} = useContext(cartContext);
  // Creo un estado para usarlo en el UseEffect
  const [cart,setCart] = useState([getTotalItem]);

  // Funcion para notificar que no hay productos en el carrito
  const notify = () => toast.error(`No hay productos en el carrito`);
  // console.log(cart)

  // Cada vez que cambie el estado de cart se ejecuta el useEffect y se actualiza el estado de cart con el valor de getTotalItem
  useEffect(() => {
    setCart(getTotalItem);
  }, [getTotalItem]);


    return (
      <>
      {/* Condicional para que no me deje comprar sin objetos en el carrito  */}
      {cart > 0
        ? <Button
        as={Link} 
        to='/cart'
        disabled={getTotalItem === 0}>
          <FontAwesomeIcon 
          icon={faShoppingCart}
          />
          {getTotalItem() > 0 && <>{getTotalItem()}</>}
        </Button>
        : <Button
        onClick={notify}
        >
          <FontAwesomeIcon
          icon={faShoppingCart}
          />
          <ToastContainer />
        </Button>}
        </>
    );
}  