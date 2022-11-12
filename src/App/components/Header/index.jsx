import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ROUTES from "utils/routes";

import "./Header.css";

const Header = ({ cartItems }) => (
  <div className="header">
    <Link to={ROUTES.root} className="header__logo">
      <img
        src="/assets/images/logo.svg"
        alt="Mobile React Logo"
        width={548}
        height={230}
      />
    </Link>

    <div className="header__shopping-cart">
      <AiOutlineShoppingCart size={40} />

      {/* Reduce font size if number of items has 3 digits or more */}
      <span {...(cartItems >= 100 && { style: { fontSize: "12px" } })}>
        {cartItems}
      </span>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items
});

export default connect(mapStateToProps)(Header);