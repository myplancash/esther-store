import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
  // takes the category name from url parameter
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext)
  console.log('render/ re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap);
  const [ products, setProducts ] = useState(categoriesMap[category]);


  useEffect(() => {
    console.log('Effect fired calling setProducts')
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return(
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category;