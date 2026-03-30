import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h2>Chi tiết sản phẩm:</h2>
      <p>Product: {id}</p>
      <button onClick={handleBuy}>Mua hàng</button>
    </div>
  );
};

export default ProductDetail;
