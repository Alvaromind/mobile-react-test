import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import ROUTES from "utils/routes";

import "./Header.css";

const Header = () => (
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

      <span /* Change font-size if number >= 100 */>3</span>
    </div>
  </div>
);

export default Header;