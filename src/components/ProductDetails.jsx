import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../assets/all_product';

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product with the matching id
  const product = all_product.find(
    (item, index) => (item.id || index).toString() === id
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image Section */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right: Details Section */}
          <div className="md:w-1/2 p-8 flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            {/* Rating Stars */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-gray-300 text-xl">&#9733;</span>
              <span className="ml-2 text-sm text-gray-600">(4.0)</span>
            </div>
            <p className="text-gray-800 font-semibold text-2xl mb-2">
              ${product.new_price}
            </p>
            {product.old_price && (
              <p className="text-gray-400 line-through text-xl mb-4">
                ${product.old_price}
              </p>
            )}
            {/* Add to Cart Button */}
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition mb-4">
              Add to Cart
            </button>
            {/* Additional details can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
