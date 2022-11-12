import React from "react";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => (
  <SkeletonTheme baseColor="#cccccc">
    <Header />
    <Breadcrumbs />
    <Outlet />
  </SkeletonTheme>
);

export default Layout;