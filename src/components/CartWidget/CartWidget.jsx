import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export function CartWidget () {
    return (
       <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="notification">5</span>
      </div>   
    )
}  