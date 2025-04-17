import React from "react";
import all_product from "../assets/all_product";
import { Link, useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      
      
      {/* Hero Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover the Best Deals</h2>
            <p className="text-gray-600 mb-6">Explore our wide range of products and enjoy exclusive discounts every day.</p>
             
            <button  onClick={()=>{navigate('./shop')}} className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">Shop Now</button>
            
          </div>
          <div className="md:w-1/2">
            <img src="https://bodhtree.com/wp-content/uploads/2016/05/ecommerce.png" alt="Shopping" className="w-full rounded-xl " />
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-3xl font-bold text-center mt-8">Welcome to EcomStore</h1>
        <p className="text-center text-gray-600 mt-4">Find the best products at unbeatable prices.</p>
       
        
      </div>
      <h2 className="text-2xl font-bold text-center text-green-500 mt-8">Top Products</h2>
      <div className="flex flex-wrap gap-6 ml-10">
  {
    all_product.slice(0, 6).map((item, index) => (
      <div
        key={index}
        className="max-w-xs bg-white shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      >
        <div className="p-4">
           <Link to={`/product/${item.id || index}`}>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-60 object-cover rounded-t-2xl"
                                />
                              </Link>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          
          {/* Row with new price, old price, and button */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-gray-600 font-semibold">NPR {item.new_price}</p>
              <p className="text-gray-400 line-through text-sm">NPR{item.old_price}</p>
            </div>
            <Link to={`/product/${item.id || index}`}>
            <button  className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition text-sm">
              Buy now
            </button>
            </Link>
          </div>
        </div>
      </div>
    ))
  }
</div>


    </div>
  );
};

export default Home;
