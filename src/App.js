import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import { Shop } from "./pages/shop/shop";
import {Login} from "./pages/login/login";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Newsletter from "./components/Footer/Newsletter/Newsletter";

function App() {
    return (
        <BrowserRouter>
              <ShopContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                </ShopContextProvider>
             
                <Newsletter />
                <Footer />
        </BrowserRouter>
    );
}

export default App;
