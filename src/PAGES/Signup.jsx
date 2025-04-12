import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-100 px-6">
  <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
    
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" placeholder="Create password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Signup
