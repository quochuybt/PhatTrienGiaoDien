import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

const DynamicRoute = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DynamicRoute;
