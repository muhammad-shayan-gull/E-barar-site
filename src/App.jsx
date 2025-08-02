
import './App.css'
import MovingHeader from './components/Header/MovingHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveNavbar from './components/Navbar/ResponsiveNavbar';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Academy from './pages/Academy/Academy';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CartPage from './pages/CartPage/Cartpage';
import SearchResults from './pages/SearchResults/SearchResults';
import CategoryPage from './pages/CategoryPage/CategoryPage';
function App() {
  

  return (
    <>
    <MovingHeader/>

  <Router>
      <ResponsiveNavbar/>
   <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/Academy" element={<Academy/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
   
    <Footer/>
    </>
  )
}

export default App
