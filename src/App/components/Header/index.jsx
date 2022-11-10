import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ROUTES from "utils/routes";

import "./Header.css";

const Header = ({ cartItems }) => (
  <div className="header">
    <NavLink to={ROUTES.root} className="header__logo">
      <img
        src="/assets/images/logo.svg"
        alt="Mobile React Logo"
        width={548}
        height={230}
      />
    </NavLink>

    <div className="header__shopping-cart">
      <AiOutlineShoppingCart size={40} />

      <span /* Change font-size if number >= 100 */>{cartItems}</span>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items
});

export default connect(mapStateToProps)(Header);