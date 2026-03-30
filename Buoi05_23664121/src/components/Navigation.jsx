import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import Products from "./Products";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <nav>
                <Link to="/products">Products</Link>
              </nav>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
