import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header/Main';
import Footer from '../components/Footer/Main';
import Home from '../components/Home/Main';
import About from '../components/About/Main';
import Chefs from '../components/Chef/Main';
import Contact from '../components/Contact/Main';
import Menu from '../components/Menu/Main';
import Menuone from '../components/Menu/Menuone';
import Menutwo from '../components/Menu/Menutwo';
import Menuthree from '../components/Menu/Menuthree';
import Menufour from '../components/Menu/Menufour';
import Book from '../components/Book/Main';
import Hometwo from '../components/Headertwo/Main';
import Homethree from '../components/Homethree/Homethree';
import Signup from '../components/Auth/Signup';
import Login from '../components/Auth/Login';
import CartCheckout from '../components/Checkout/main';
import ProductDetail from '../product.details/ProductDetails';
import Reservation from '../components/Allmenus/FirstMenu/Reservation';

function Index() {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const pathsWithoutHeader = ['/hometwo', '/login', '/sign-up','/cartcheckout'];
    const shouldShowHeader = !pathsWithoutHeader.includes(location.pathname);
    console.log('Current path:', location.pathname);  // Debug log
    console.log('Show header:', shouldShowHeader);    // Debug log
    setShowHeader(shouldShowHeader);
  }, [location]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route path="/hometwo" element={<Hometwo />} />
        <Route path="/homethree" element={<Homethree />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menuone" element={<Menuone />} />
        <Route path="/menutwo" element={<Menutwo />} />
        <Route path="/menuthree" element={<Menuthree />} />
        <Route path="/menufour" element={<Menufour />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourchefs" element={<Chefs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/CartCheckout" element={<CartCheckout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
