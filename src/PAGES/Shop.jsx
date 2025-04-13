import React from 'react'
import all_product from '../assets/all_product'
import { Link } from 'react-router-dom'

const Shop = () => {
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
        {
          all_product.slice(0, 9).map((item, index) => (
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
                    <p className="text-gray-800 font-semibold">${item.new_price}</p>
                    <p className="text-gray-400 line-through text-sm">${item.old_price}</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  </div>
</div>

    </div>
  )
}

export default Shop
