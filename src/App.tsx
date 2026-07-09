import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import ShopCategory from "./pages/ShopCategory"
 import ProductPage from "./pages/ProductPage"
 import { Cart } from "./pages/Cart"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
 
        <Routes>
          <Route path="/ecommerce-Frontend" element={<Home />} />
          <Route path="/collections/denim-shirt" element={<ShopCategory category="Denim Shirt"/>}/>
          <Route path="/collections/solid-shirt" element={<ShopCategory category="Solid Shirt"/>}/>
          <Route path="/collections/checked-shirt" element={<ShopCategory category="Checked Shirt"/>}/>
          <Route path="/collections/cuban-shirt" element={<ShopCategory category="Cuban Shirt"/>}/>
         <Route path="/collections/luxury-panjabi" element={<ShopCategory category="Luxury Panjabi"/>}/>
   
          <Route path="/product" element={ <ProductPage/>}>
            <Route path=":productID" element={<ProductPage/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
