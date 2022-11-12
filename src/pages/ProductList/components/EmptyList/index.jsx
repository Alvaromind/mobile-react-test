import React from "react";
import { FaRegSadTear } from "react-icons/fa";

import "./EmptyList.css";

const EmptyList = () => (
  <div className="empty-list">
    <FaRegSadTear size={72} />

    <p>No se han encontrado resultados</p>
  </div>
);

export default EmptyList;