import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as EstherLogo } from '../../assets/esther-logo.svg';
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <EstherLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          <Link className="nav-link" to="/contact">CONTACT</Link>
          <Link className="nav-link" to="/sign-in">SIGN IN</Link>
          <Link className="nav-link" to="/shop">CART</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;