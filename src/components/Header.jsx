import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => (
  <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold"> E-Commerce</Link>
    <Link to="/cart" className="text-lg">🛒 Cart ({cartCount})</Link>
  </header>
);

export default Header;
