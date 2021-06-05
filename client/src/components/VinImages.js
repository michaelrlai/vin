import React, { useContext } from "react";
import { VinContext } from "../context/VinContext";

const VinImages = () => {
  const { currentImages } = useContext(VinContext);

  return currentImages ? (
    <img src={currentImages[0].link} className="img-fluid" alt="..." />
  ) : null;
};

export default VinImages;
