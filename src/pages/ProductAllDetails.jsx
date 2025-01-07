import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/api";

const ProductAllDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const data = await fetchProducts();
      setProduct(data.find((p) => p.id === parseInt(id)));
    };
    fetchProductDetail();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    // <div className="p-6">
    //   <img src={product.image} alt={product.title} className="h-64 mx-auto" />
    //   <h1 className="text-2xl font-bold">{product.title}</h1>
    //   <p className="text-sm text-gray-500">{product.category}</p>
    //   <p className="text-lg">{product.description}</p>
    //   <p className="text-xl font-bold">${product.price}</p>
    //   <p className="text-yellow-500">Rating: {product.rating.rate}</p>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 mx-auto object-contain mb-4"
      />
      <h1 className="text-2xl font-bold text-center mb-2">{product.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-4">
        Category: {product.category}
      </p>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-blue-600">${product.price}</p>
        <p className="text-yellow-500 font-medium">
          Rating: {product.rating.rate}
        </p>
      </div>
    </div>
  </div>
  );
};

export default ProductAllDetails;
