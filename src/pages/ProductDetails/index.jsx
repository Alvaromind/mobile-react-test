import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import ErrorBoundary from "pages/components/ErrorBoundary";
import ErrorComponent from "pages/components/ErrorComponent";
import Loader from "pages/components/Loader";

import { useGetMobileByIdQuery, useAddMobileToCartMutation } from "utils/mobilesApi";
import { updateCartItemsAction } from "utils/cartReducer";

import ProductSpec from "./components/ProductSpec";
import "./ProductDetails.css";

const parseCameraArray = arr => typeof arr === "string" ? arr : arr.join(", ");

const ProductDetails = ({ updateCartItems }) => {
  const { id } = useParams();
  const {
    data,
    isLoading,
  } = useGetMobileByIdQuery(id);
  const [addMobileToCart] = useAddMobileToCartMutation();

  const handleSubmit = async ev => {
    ev.preventDefault(); // Prevent refresh
    const formData = new FormData(ev.target);
    const params = Object.fromEntries(formData);

    const cartItems = await addMobileToCart({
      id,
      colorCode: params.color,
      storageCode: params.memory,
    });
    updateCartItems(cartItems);
  };

  if (isLoading) {
    return <Loader fullScreen />;
  }

  // Destructure info of the mobile
  const {
    imgUrl, brand, model, price, cpu, ram, os, displayResolution, battery,
    primaryCamera, secondaryCmera, dimentions, weight, colors, internalMemory
  } = data;

  const camera = `Primaria: ${parseCameraArray(primaryCamera)}\nSecundaria: ${parseCameraArray(secondaryCmera)} `;
  return (
    <div className="product-details">
      <div className="product-details__container">
        <div className="product-details__image">
          <img src={imgUrl} alt={`${brand} -${model} `} width="160px" height="212px" loading="lazy" />
        </div>

        <div className="product-details__description">
          <h1>{brand} {model}</h1>

          <p className="product-details__price">{price || "--"}€</p>

          <div>
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

          <form className="product-details__actions" onSubmit={handleSubmit}>
            <p><strong>Seleccione un color:</strong></p>

            <div className="product-details__selector-container">
              {colors.map((color, index) => (
                <label key={`radio-${color}`} htmlFor={color} className="product-details__selector">
                  <input type="radio" name="color" value={color} id={color} defaultChecked={index === 0} />
                  <span>{color}</span>
                </label>
              ))}
            </div>

            <p><strong>Seleccione almacenamiento:</strong></p>

            <div className="product-details__selector-container">
              {internalMemory.map((memory, index) => (
                <label key={`radio-${memory}`} htmlFor={memory} className="product-details__selector">
                  <input type="radio" name="memory" value={memory} id={memory} defaultChecked={index === 0} />
                  <span>{memory}</span>
                </label>
              ))}
            </div>

            <button type="submit" className="product-details__submit">
              Añadir al carrito
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { updateCartItems: updateCartItemsAction };

const ConnectedProductDetails = connect(null, mapDispatchToProps)(ProductDetails);

export default () => (
  <ErrorBoundary errorComponent={<ErrorComponent errorMessage="Ups! Ha ocurrido un error inesperado" />}>
    <ConnectedProductDetails />
  </ErrorBoundary>
);