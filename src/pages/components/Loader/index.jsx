import React from "react";

import "./Loader.css";

const Loader = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="loader__container">
        <span className="loader" aria-busy="true"><span />Cargando...</span>
      </div>
    );
  }

  return (
    <span className="loader" aria-busy="true"><span />Cargando...</span>
  );
};

export default Loader;