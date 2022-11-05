import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ROUTES from "utils/routes";

const ProductList = React.lazy(() => import("pages/ProductList"));
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path={ROUTES.root} element={<ProductList />} />
        <Route path={ROUTES.details} element={<ProductDetails />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;