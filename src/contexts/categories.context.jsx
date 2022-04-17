import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };



  // every time you run it it will set new values to your firestore db
  /* useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, []) */

  // getCategoriesAndDocuments(); will get back a promise
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};