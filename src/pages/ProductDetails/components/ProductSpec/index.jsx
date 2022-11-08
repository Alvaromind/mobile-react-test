import React from "react";

import { CgSmartphoneChip, CgSmartphoneRam } from "react-icons/cg";
import { GiWeight } from "react-icons/gi";
import { IoIosCog } from "react-icons/io";
import { MdOutlineScreenshot, MdOutlineCameraAlt } from "react-icons/md";
import { RiBattery2ChargeLine, RiFullscreenLine } from "react-icons/ri";

import "./ProductSpec.css";

const ICONS = {
  cpu: CgSmartphoneChip,
  ram: CgSmartphoneRam,
  os: IoIosCog,
  displayResolution: MdOutlineScreenshot,
  battery: RiBattery2ChargeLine,
  camera: MdOutlineCameraAlt,
  dimentions: RiFullscreenLine,
  weight: GiWeight,
};

const LABELS = {
  cpu: "Procesador",
  ram: "RAM",
  os: "Sistema Operativo",
  displayResolution: "Resolución de pantalla",
  battery: "Batería",
  camera: "Cámara",
  dimentions: "Dimensiones",
  weight: "Peso",
};

const ProductSpec = ({ keyword, content }) => {
  const Icon = ICONS[keyword];
  const label = LABELS[keyword];

  return (
    <div className="product-spec">
      <Icon size={48} style={{ flexShrink: 0 }} />

      <div>
        <p className="product-spec__label">{label}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ProductSpec;