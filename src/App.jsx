import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './PAGES/Home';
import About from './PAGES/About';
import Contact from './PAGES/Contact';
import Shop from './PAGES/Shop';
import Cart from './PAGES/Cart';
import Footer from './components/Footer';
import Login from './PAGES/Login';
import Signup from './PAGES/Signup';



function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
    
     

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
