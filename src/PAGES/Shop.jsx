// src/pages/Shop.jsx
import React, { useContext, useState } from 'react';
import all_product from '../assets/all_product';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 9, all_product.length));
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Shop Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="bg-white p-6 rounded-2xl shadow-md h-fit">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#" className="hover:text-blue-600">All Products</a></li>
                <li><a href="#" className="hover:text-blue-600">Clothing</a></li>
                <li><a href="#" className="hover:text-blue-600">Accessories</a></li>
                <li><a href="#" className="hover:text-blue-600">Electronics</a></li>
                <li><a href="#" className="hover:text-blue-600">Home & Living</a></li>
              </ul>
            </aside>

            {/* Product Grid */}
            <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Render loaded products */}
              {all_product.slice(0, visibleCount).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <Link to={`/product/${item.id || index}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-60 object-cover rounded-t-2xl"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <p className="text-gray-800 font-semibold">NPR {item.new_price}</p>
                        <p className="text-gray-400 line-through text-sm">NPR {item.old_price}</p>
                      </div>
                      <Link to={`/product/${item.id || index}`}>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-green-700 transition"
                        >
                          Buy now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Skeleton loaders when fetching more */}
              {isLoading && Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="bg-white rounded-2xl shadow-md animate-pulse"
                >
                  <div className="w-full h-60 bg-gray-200 rounded-t-2xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Load More button */}
          <div className="flex justify-center mt-10">
            {!isLoading && visibleCount < all_product.length && (
              <button
                onClick={handleLoadMore}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
