import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from "./pages/ProductPage.jsx";
import Main from "./pages/Main.jsx";
import ProductCart from "./pages/ProductCart.jsx";
import AllProducts from "./pages/AllProducts.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/categories" element={<AllProducts />} />
              <Route path="/product" element={<ProductPage />} />
              {/*<Route path="/cart" element={<ProductCart />} />*/}
          </Routes>
      </Router>
  )
}

export default App
