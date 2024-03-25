import React, {  useState, useEffect} from 'react'
import { Route, Routes , useLocation} from 'react-router-dom';
import Header from '../components/Header/Main';
import Footer from '../components/Footer/Main';
import Home from '../components/Home/Main';
import About from '../components/About/Main';
import Chefs from '../components/Chef/Main';
import Contact from '../components/Contact/Main';
import Menu from '../components/Menu/Main';
import Menuone from '../components/Menu/Menuone';
import Menutwo from '../components/Menu/Menutwo'
import Menuthree from '../components/Menu/Menuthree';
import Menufour from '../components/Menu/Menufour';
import Book from '../components/Book/Main'
import Hometwo from '../components/Headertwo/Main'
import Homethree from '../components/Homethree/Homethree'

function Index() {

  const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/hometwo"){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])

  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>
      {homepage && <Header/>}
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/reservation" element={<Book />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Index