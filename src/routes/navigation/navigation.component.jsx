import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { CartContext } from '../../contexts/cart.context';
// import { UserContext } from '../../contexts/user.context';
import { useSelector } from 'react-redux';

import { ReactComponent as EstherLogo } from '../../assets/esther.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';


import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <EstherLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {currentUser ? (
              <NavLink linkcolor='MediumBlue' as="span" onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon/>
        </NavLinks>
        { isCartOpen && <CartDropdown /> }
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;