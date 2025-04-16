// src/PAGES/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

 
  const totalPrice = cartItems.reduce((accumulator, item) => {
    
    return accumulator + (Number(item.new_price) * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-right">Price</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    {/* Product Image */}
                    <td className="p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-auto object-cover"
                      />
                    </td>
                    {/* Product Description */}
                    <td className="p-4">
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-gray-600">
                        {item.description || 'No description available.'}
                      </p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </td>
                    {/* Calculated Price based on Quantity */}
                    <td className="p-4 text-right">
                      <p className="font-semibold text-lg">
                        ${ (Number(item.new_price) * item.quantity).toFixed(2) }
                      </p>
                    </td>
                    {/* Remove Button */}
                    <td className="p-4 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Price & Checkout Button */}
            <div className="mt-6 text-right">
              <p className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-2">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
