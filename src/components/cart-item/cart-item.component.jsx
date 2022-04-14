import './cart-item.styles.scss';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {

  const { clearItemToCart } = useContext(CartContext)

  const clearItemtHandler = () => clearItemToCart(cartItem)
  const {quantity, name, imageUrl, price} = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${quantity * price}
        </span>
      </div>
      <span className='close-symbol' onClick={clearItemtHandler}>&#10005;</span>
    </div>
  )

}

export default CartItem;