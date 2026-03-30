import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Chi tiết sản phẩm:</h2>
      <p>Product: {id}</p>
    </div>
  );
};

export default ProductDetail;
