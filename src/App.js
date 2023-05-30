import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ShopPage } from "./pages/ShopPage";
import { ContactsPage } from "./pages/ContactsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
