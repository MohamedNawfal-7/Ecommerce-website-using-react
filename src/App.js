import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Components/Pages/shop';
import ShopCategory from './Components/Pages/shopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory category="Mens"/>}/>
        <Route path='/Womens' element={<ShopCategory category="Womens"/>}/>
        <Route path='/Kidss' element={<ShopCategory category="Kids"/>}/>
        <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
