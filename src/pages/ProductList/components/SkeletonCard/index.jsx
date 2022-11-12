import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "../ProductCard/ProductCard.css";

const Box = ({ children }) => (
  <div className="product-card">
    {children}
  </div>
);

const SkeletonCard = () => (
  <Skeleton wrapper={Box} count={2} height={100} />
);

export default SkeletonCard;