import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../contexts/cart.context';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartDropdownContainer, CartItems, EmptyMessage, } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const { cartItems, setIsCartOpen } = useContext(CartContext);
/*  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }
 */

  const setIsCartOpenHandler = () => dispatch(setIsCartOpen)

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
          <CartItem key={item.id} cartItem={item}/>
        ))) : (<EmptyMessage>Your cart is Empty</EmptyMessage>)}
      </CartItems>
      <Link to="/checkout"><Button onClick={setIsCartOpenHandler}>GO TO CHECKOUT</Button></Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown;