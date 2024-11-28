import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './head';
import Banner from './component/banner';
import About from './component/about';
import Categories from './component/categories';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-black">
        <Head />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;