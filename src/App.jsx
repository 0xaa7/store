import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
