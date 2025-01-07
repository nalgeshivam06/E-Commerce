import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductAllDetails from "./pages/ProductAllDetails";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ?{ ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev,{...product,quantity: 1}];
    });
  };

  const updateQuantity = (id,newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1,newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };



  return (
    <div>
      <Header cartCount={cart.length} />
      <Routes>
        {/* <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} /> */}
        <Route path="/" element={<HomePage cart={cart} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductAllDetails />} />
        {/* <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} /> */}
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
      </Routes>
    </div>
  );
};

export default App;
