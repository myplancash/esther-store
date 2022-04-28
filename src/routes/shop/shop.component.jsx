import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// need the dispatch ( useDispatch ) to actually deliver the action
import { setCategories } from '../../store/categories/categories.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category-component';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      // console.log(categoriesArray);
      dispatch(setCategories(categoriesArray))
    };

    getCategoriesMap()
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  )
}

export default Shop;