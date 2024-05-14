
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/Shopcategory';
import banner_kids from "./Components/Assests/banner_kids.png"
import banner_mens from "./Components/Assests/banner_mens.png"
import banner_women from "./Components/Assests/banner_women.png"

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/product/:productId' element={<Product />} />
          <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
          
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
