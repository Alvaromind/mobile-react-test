import React from "react";
import { FaRegSadTear } from "react-icons/fa";

import "./ErrorComponent.css";

const ErrorComponent = ({ errorMessage }) => (
  <div className="empty-list">
    <FaRegSadTear size={72} />

    <p>{errorMessage}</p>
  </div>
);

export default ErrorComponent;