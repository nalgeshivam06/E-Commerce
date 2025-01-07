import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const truncateTitle = (title, limit) => {
    return title.length > limit ? `${title.slice(0, limit)}...` : title;
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold">
        {truncateTitle(product.title, 25)}
      </h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
