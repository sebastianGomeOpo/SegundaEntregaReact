import React, { useContext,useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from '../../services/fireBase'
import {cartContext} from '../../storage/CartContext'
// import { SendButton } from '../SendButton/SendButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Flexwrapper } from '../FlexWrapper/FlexWrapper'
import CustomerForm from '../CustomerForm/CustomerForm'


function CartContainer() {
  const {cart} = useContext(cartContext);
  const [orderId, setOrderId] = useState(null);
  const navigateTo = useNavigate();

  // Función para manejar el checkout
   // Se hace asincrona porque se va a mandar a firebase
  async function handleCheckout(userData) {
    // Validar que el carrito no esté vacío


    // Optimizar el carrito
    const cartOptimized = cart.map((item) => (
      {
        id: item.id,
        title: item.title,
        price: item.price,
        count: item.count
      }
    ))

    // Modelo orden de compra
    const order ={
      buyer: userData,
      items: cartOptimized,
      date: new Date(),
      total: cart.reduce((acc, item) => acc + item.price * item.count, 0)
    };

    // Mandar a Firebase
      // Creamos una variable para guardar el id de la orden
    let id = await createBuyOrder(order);

    // // recibir respuesta para mandar confirmación de compra
    // console.log(id);
    

    // // Usar rendering condicional para mostrar el botón de checkout
    setOrderId(id)

    // // Redireccionar a la página de confirmación
    navigateTo(`/thank-you/${id}`);
  }

  if (orderId !== null) {
    return (
      <div>
        <h3>Gracias por tu compra!</h3>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    )
  }
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.count}</td>
              <td>{item.price}</td>
              <td>{item.price * item.count}</td>
              <td>
                <FontAwesomeIcon 
                icon={faTrash}
                onClick={item.removeItem}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Flexwrapper>
      <CustomerForm
      // con la prop onSubmit le pasamos la función que se va a ejecutar cuando se envíe el formulario
        onSubmit={handleCheckout}
      />
      </Flexwrapper>
     
    </>
  )
}

export default CartContainer