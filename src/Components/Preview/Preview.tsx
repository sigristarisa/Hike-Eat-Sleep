import React from "react";

import { usePrismicPreviewResolver } from "@prismicio/react";
import { useNavigate } from "react-router-dom";
const Preview: React.FC = () => {
  const navigate = useNavigate();

  usePrismicPreviewResolver({ navigate });
  return null;
};

export default Preview;
