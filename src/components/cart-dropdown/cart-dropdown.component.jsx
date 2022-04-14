import { useContext } from 'react';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
// import { useNavigate } from 'react-router-dom';



import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = ({history, dispatch}) => {

  const { cartItems, setIsCartOpen } = useContext(CartContext);
 /*  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }
 */
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}/>
        ))) : (<p>Your cart is Empty</p>)}
      </div>
      <Link to="/checkout"><Button onClick={() => setIsCartOpen()}>GO TO CHECKOUT</Button></Link>
    </div>
  )
}

export default CartDropdown;