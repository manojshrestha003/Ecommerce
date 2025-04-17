import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-100 text-black-300 py-10 mt-7">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Brand/Logo */}
    <div>
      <h2 className="text-2xl font-bold text-black mb-4">EcomStore</h2>
      <p className="text-sm">Your one-stop online shop for all the latest trends and best deals.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Products</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-3">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Email: support@EcomStore.com</li>
        <li>Phone: +97798556665899</li>
        <li>Address: Chabhil , Kathmandu Nepal</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
        <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i> Instagram</a>
      </div>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} EcomStore. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer
