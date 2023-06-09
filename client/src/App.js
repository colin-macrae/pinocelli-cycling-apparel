import './App.css';
import { Routes, Route } from "react-router-dom";
import MensProducts from './pages/Mens-products';
import Navbar from './components/Navbar';
import WomensProducts from './pages/Womens-products';
import Home from './pages/Home';
import ShoppingCart from './pages/Shopping-cart';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/womensproducts" element={<WomensProducts />} />
        <Route path="/mensproducts" element={<MensProducts />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/productdetails/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
