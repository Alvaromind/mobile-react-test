import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

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

  const [filteredMobiles, setFilteredMobiles] = useState([]);
  let filterTimeout;

  useEffect(() => {
    if (!isLoading) {
      setFilteredMobiles(mobiles);
    }
  }, [mobiles, isLoading]);

  const handleFilter = ev => {
    const query = ev.target.value;

    clearTimeout(filterTimeout);
    if (!query) {
      setFilteredMobiles(mobiles);
      return;
    }

    filterTimeout = setTimeout(() => {
      setFilteredMobiles(mobiles.filter(mobile => (
        `${mobile.brand}-${mobile.model}`.toLowerCase().includes(query.toLowerCase())
      )));
    }, 500);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      <label htmlFor="search-bar" className="product-list__search">
        <input
          type="search"
          placeholder="Buscar en Mobile React"
          onChange={handleFilter}
          id="search-bar"
        />
        <FaSearch />
      </label>

      <div className="product-list__cards-container">
        {filteredMobiles.map(mobile => (
          <ProductCard key={`${mobile.brand}-${mobile.model}`} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;