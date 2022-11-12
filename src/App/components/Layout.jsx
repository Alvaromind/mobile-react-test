import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => (
  <>
    <Header />
    <Breadcrumbs />
    <Outlet />
  </>
);

export default Layout;