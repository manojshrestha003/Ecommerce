
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import all_product from '../assets/all_product';
import { CartContext } from '../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

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

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success('Product added'); 
  };

  const relatedProducts = all_product
    .filter((item, index) => (item.id || index).toString() !== id)
    .slice(0, 4);

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
              NPR {product.new_price}
            </p>
            {product.old_price && (
              <p className="text-gray-400 line-through text-xl mb-4">
                NPR {product.old_price}
              </p>
            )}

            {/* Quantity Controls */}
            <div className="flex items-center mb-4">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="px-4 py-1 bg-white border-t border-b border-gray-300">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition mb-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Link to={`/product/${item.id || index}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-800 font-semibold">NPR {item.new_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </div>
  );
};

export default ProductDetails;
