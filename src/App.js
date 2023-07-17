import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
