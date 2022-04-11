import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div>
      <h2>I'm in the Shop</h2>
      {
        products.map(({id, name}) => (
          <div key={id}>
            <h3>{name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Shop;