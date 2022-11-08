import React from "react";
import ROUTES from "utils/routes";

import "./Header.css";

const Header = () => (
  <div className="header">
    <a href={ROUTES.root} className="header__logo">
      <img
        src="/assets/images/logo.svg"
        alt="Mobile React Logo"
        width={548}
        height={230}
      />
    </a>
  </div>
);

export default Header;