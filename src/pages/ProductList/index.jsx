import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useGetMobilesQuery } from "utils/mobilesApi";

import ProductCard from "./components/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const {
    data: mobiles,
    isLoading,
    isError,
  } = useGetMobilesQuery();

  const [filteredMobiles, setFilteredMobiles] = useState([]);
  let filterTimeout;

  // Update filteredMobiles when mobiles data is ready
  useEffect(() => {
    if (!isLoading) {
      setFilteredMobiles(mobiles);
    }
  }, [mobiles, isLoading]);

  const handleFilter = ev => {
    const query = ev.target.value;

    clearTimeout(filterTimeout); // Clear previous timeout
    if (!query) {
      setFilteredMobiles(mobiles);
      return;
    }

    // Set timeout to wait for another change in the search text field
    filterTimeout = setTimeout(() => {
      setFilteredMobiles(mobiles.filter(mobile => (
        `${mobile.brand}-${mobile.model}`.toLowerCase().includes(query.toLowerCase())
      )));
    }, 500);
  };

  return (
    <div className="product-list">
      <label htmlFor="search-bar" className="product-list__search">
        <input
          type="search"
          placeholder="Buscar en Mobile React"
          onChange={handleFilter}
          id="search-bar"
          disabled={isLoading || isError}
        />

        <FaSearch />
      </label>

      <div className="product-list__cards-container">
        {isLoading
          ? <span className="product-list__loading"><span />Cargando...</span>
          : filteredMobiles.map(mobile => (
            <ProductCard key={`${mobile.brand}-${mobile.model}`} mobile={mobile} />
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;