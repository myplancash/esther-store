import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const {quantity, name, imageUrl, price} = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className='quantity'>{quantity} * ${price}</span>
      </div>
      <span className="close">&#10005;</span>
    </div>
  )

}

export default CartItem;