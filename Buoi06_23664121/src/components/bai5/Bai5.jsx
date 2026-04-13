import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProduct from "./ListProduct";
import Cart from "./Cart";

const Bai5 = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Bai5;
