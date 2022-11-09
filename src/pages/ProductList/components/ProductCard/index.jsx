import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "utils/routes";

import "./ProductCard.css";

const ProductCard = ({ mobile }) => {
  const { id, brand, model, imgUrl, price } = mobile;

  return (
    <div className="product-card">
      <Link to={ROUTES.details(id)} className="product-card__image">
        <img src={imgUrl} alt={`${brand}-${model}`} loading="lazy" />
      </Link>

      <div className="product-card__info">
        <Link to={ROUTES.details(id)} className="product-card__title">
          <p className="product-card__brand">{brand}</p>
          <p className="product-card__model">{model}</p>
        </Link>
        <span className="product-card__price">{price || "--"}€</span>
      </div>
    </div>
  );
};

export default ProductCard;