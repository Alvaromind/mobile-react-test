import React from "react";
import { NavLink } from "react-router-dom";
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
  </div>
);

export default Header;