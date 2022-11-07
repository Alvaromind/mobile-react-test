import React from "react";

import { useGetMobilesQuery } from "api/mobilesApi";
import ROUTES from "utils/routes";

const ProductList = () => {
  const {
    data: mobiles,
    isLoading,
    isError,
    error,
  } = useGetMobilesQuery();

  return (
    <>
      <h1>PRODUCT LIST</h1>

      {isLoading
        ? <p>Loading...</p>
        : mobiles.map(mobile => (
          <p>
            <a href={ROUTES.details(mobile.id)}>{mobile.brand} - {mobile.model}
              <img src={mobile.imgUrl} alt="" />
            </a> <strong>{mobile.price}</strong>
          </p>
        ))
      }
    </>
  );
};

export default ProductList;