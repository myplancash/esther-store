import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import Contact from './routes/contact/contact.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
    if(user) {
      //the userSnapshop logic already did all the verifications when we defined it, if exists() or not
      createUserDocumentFromAuth(user);
    } //otherwise:
      dispatch(setCurrentUser(user));
      // if a user sign-out we want to set null, sign-in we wanna store the object
    })
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/auth" element={<Authentication />}/>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
