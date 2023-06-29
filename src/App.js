import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Navbar from './components/Home/Navbar';
import Footer from './components/Footer';

const useScrollVisibility = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
  
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;
  
        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    return visible;
  };

const App = () => {

  const visible = useScrollVisibility();

  return (
    <div>
      <Router>
        <Navbar visible={visible}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
