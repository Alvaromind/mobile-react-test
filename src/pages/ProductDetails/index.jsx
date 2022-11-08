import React from "react";
import { useParams } from "react-router-dom";

import { useGetMobileByIdQuery } from "api/mobilesApi";

import ProductSpec from "./components/ProductSpec";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetMobileByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    imgUrl, brand, model, price,
    cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight
  } = data;

  const camera = `Primaria: ${primaryCamera.reduce((prev, cur) => `${prev}, ${cur}`, "")}\nSecundaria: ${secondaryCmera} `;

  return (
    <div className="product-details">
      <div className="product-details__container">
        <div className="product-details__image">
          <img src={imgUrl} alt={`${brand} -${model} `} loading="lazy" />
        </div>

        <div className="product-details__description">
          <h1>{brand} {model}</h1>

          <p className="product-details__price">{price}€</p>

          <div className="product-details__specifications">
            <ProductSpec keyword="cpu" content={cpu} />
            <ProductSpec keyword="ram" content={ram} />
            <ProductSpec keyword="os" content={os} />
            <ProductSpec keyword="battery" content={battery} />
            <ProductSpec keyword="displayResolution" content={displayResolution} />
            <ProductSpec keyword="dimentions" content={dimentions} />
            <ProductSpec keyword="camera" content={camera} />
            <ProductSpec keyword="weight" content={`${weight}g`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;