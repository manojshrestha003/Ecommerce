import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-blue-100 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    
    {/* Header */}
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

    {/* Layout Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100  p-8 rounded-2xl shadow-lg">

      {/* Contact Info */}
      <div className="space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p>We'd love to hear from you. Reach out to us for any questions, feedback, or collaboration ideas.</p>
        
        <div>
          <p className="font-medium">📍 Address:</p>
          <p>Saraswotinagar-6 , Chabhil, Kathmandu Nepal</p>
        </div>
        <div>
          <p className="font-medium">📧 Email:</p>
          <p>support@EcomStore.com</p>
        </div>
        <div>
          <p className="font-medium">📞 Phone:</p>
          <p>+977 9800000000</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Message</label>
          <textarea rows="5" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Contact
