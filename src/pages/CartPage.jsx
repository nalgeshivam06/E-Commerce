import React, { useState } from "react";
import Cart from "../components/Cart";

const CartPage = ({ cart, updateQuantity, removeItem }) => {


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Cart</h1>
      {/* <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} /> */}
      <Cart cartItems={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
};

export default CartPage;
