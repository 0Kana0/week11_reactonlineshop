import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ShopProvider } from "./Context/ShopContext";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </ShopProvider>
    </BrowserRouter>
  );
};

export default App;
