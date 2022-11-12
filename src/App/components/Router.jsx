import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "pages/components/Loader";
import ROUTES from "utils/routes";
import Layout from "./Layout";

const ProductList = React.lazy(() => import("pages/ProductList"));
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={ROUTES.root}
            element={<ProductList />}
          />
          <Route
            path={ROUTES.details(":id")}
            element={<ProductDetails />}
          />
          <Route
            path={ROUTES.any}
            element={<h1>404: NOT FOUND</h1>}
          />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;