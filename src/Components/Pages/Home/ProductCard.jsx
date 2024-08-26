// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center bg-white shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
