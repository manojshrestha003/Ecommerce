import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">EcomStore</Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-gray-800 transition">Shop</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition">Contact</Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {/* Search Input + Button */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="I am looking for..."
              className="pl-10 pr-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1.5 text-gray-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </div>
            <button
              className="px-4 py-1 bg-green-500 text-white rounded-r-md hover:bg-green-600 transition"
              onClick={() => {}}
            >
              Search
            </button>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 transition">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-.4 2m0 0h10m0 0l.4-2M9 21h6a2 2 0 002-2v-1H7v1a2 2 0 002 2z" />
            </svg>
          </Link>

          {/* Login Button */}
          <Link to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="block text-gray-600 hover:text-gray-800" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/about" className="block text-gray-600 hover:text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-gray-800" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

          {/* Search Input and Button */}
          <div className="relative flex items-center mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute left-3 top-1.5 text-gray-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </div>
            <button
              className="px-4 py-1 bg-green-500 text-white rounded-r-md hover:green-blue-600 transition"
              onClick={() => { setMobileMenuOpen(false)}}
            >
              Search
            </button>
          </div>

          {/* Cart and Login */}
          <div className="flex items-center space-x-4 mt-4">
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              <svg className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-.4 2m0 0h10m0 0l.4-2M9 21h6a2 2 0 002-2v-1H7v1a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
