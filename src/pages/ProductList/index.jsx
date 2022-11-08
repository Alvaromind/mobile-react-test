import React from "react";

import { useGetMobilesQuery } from "api/mobilesApi";

import ProductCard from "./components/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const {
    data: mobiles,
    isLoading,
    isError,
    error,
  } = useGetMobilesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      {mobiles.map(mobile => (
        <ProductCard mobile={mobile} />
      ))}
    </div>
  );
};

export default ProductList;