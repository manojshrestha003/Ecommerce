import React from 'react'

const About = () => {
  return (
    <div>
      <div className="bg-blue-100 min-h-screen py-16 px-6">
  <div className="max-w-6xl mx-auto">
    
    {/* Title Section */}
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
      About Us
    </h1>

    {/* Intro & Image Section */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
      
      {/* Text Content */}
      <div className="md:w-1/2 text-gray-700 text-lg space-y-4">
        <p>
          Welcome to <span className="font-semibold text-blue-600">EcomStore</span> – your ultimate destination for smart and seamless shopping experiences.
        </p>
        <p>
          We are committed to providing high-quality products at unbeatable prices. Whether you're looking for trendy fashion, the latest gadgets, or home essentials, we've got you covered.
        </p>
        <p>
          Our mission is to bring joy and convenience to your everyday life through an effortless shopping journey.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          alt="About us"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>

    {/* Stats or Features Section */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
      <div className="p-6 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
        <p className="text-gray-600 mt-2">Happy Customers</p>
      </div>
      <div className="p-6 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-600">500+</h2>
        <p className="text-gray-600 mt-2">Products Available</p>
      </div>
      <div className="p-6 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
        <p className="text-gray-600 mt-2">Customer Support</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About
