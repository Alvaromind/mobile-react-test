import React from "react";

import "./Loader.css";

const Loader = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="loader__container">
        <span className="loader"><span />Cargando...</span>
      </div>
    );
  }

  return (
    <span className="loader"><span />Cargando...</span>
  );
};

export default Loader;