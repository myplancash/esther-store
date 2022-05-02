
import { useSelector } from 'react-redux';
import { CartIconContainer, StyledShoppingIcon, ItemCount } from './cart-icon.styles.jsx';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';

// import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const cartCount = useSelector(selectCartCount)
  const toggleIsCartOpen = () => setIsCartOpen(true)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      < StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;