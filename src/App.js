import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import ShopCategory from "./Components/Pages/shopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens" element={<ShopCategory category="Mens" />} />
          <Route path="/Womens" element={<ShopCategory category="Womens" />} />
          <Route path="/Kidss" element={<ShopCategory category="Kids" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
