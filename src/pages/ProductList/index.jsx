import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useGetMobilesQuery } from "utils/mobilesApi";

import Loader from "pages/components/Loader";
import ErrorBoundary from "pages/components/ErrorBoundary";
import ErrorComponent from "pages/components/ErrorComponent";

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

  const printListContent = () => {
    if (isLoading) {
      return <Loader fullScreen />;
    }

    if (isError) {
      return <ErrorComponent errorMessage="Ups! Ha ocurrido un error inesperado." />;
    }

    if (filteredMobiles && filteredMobiles.length === 0) {
      return <ErrorComponent errorMessage="No se han encontrado resultados" />;
    }

    return filteredMobiles.map(mobile => (
      <ProductCard key={`${mobile.brand}-${mobile.model}`} mobile={mobile} />
    ));
  };

  return (
    <div className="product-list">
      <label htmlFor="search-bar" className="product-list__search">
        <input
          type="search"
          placeholder="Buscar en Mobile React"
          onChange={handleFilter}
          id="search-bar"
          data-testid="search-bar"
          disabled={isLoading || isError}
        />

        <FaSearch />
      </label>

      <div className="product-list__cards-container" data-testid="product-list">
        {printListContent()}
      </div>
    </div>
  );
};

export default () => (
  <ErrorBoundary errorComponent={<ErrorComponent errorMessage="Ups! Ha ocurrido un error inesperado." />}>
    <ProductList />
  </ErrorBoundary>
);