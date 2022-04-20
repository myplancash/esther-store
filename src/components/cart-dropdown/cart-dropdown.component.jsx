import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
// import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, CartItems, EmptyMessage, } from './cart-dropdown.styles.jsx';

const CartDropdown = ({history, dispatch}) => {

  const { cartItems, setIsCartOpen } = useContext(CartContext);
/*  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }
 */
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}/>
        ))) : (<EmptyMessage>Your cart is Empty</EmptyMessage>)}
      </CartItems>
      <Link to="/checkout"><Button onClick={() => setIsCartOpen()}>GO TO CHECKOUT</Button></Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown;