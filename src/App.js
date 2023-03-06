import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Subheader from "./components/sunheader/Subheader";
import Home from "./router/home/Home";
import Tolov from "./router/tolov/Tolov";
import Cart from "./router/cart/Cart";
import Trek from "./router/trek/Trek";
import Like from "./router/like/Like";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import Skrol from "./components/skrol/Skrol";
import FooterVerh from "./components/footer-verh/FooterVerh";
import Admin from "./router/admin/Admin";
import SingleRoute from "./router/single-router/SingleRouter";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Subheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tolov" element={<Tolov />} />   
        <Route path="/trek" element={<Trek />} />
        <Route path="/savatcha" element={<Cart />} />
        <Route path="/like" element={<Like />} />
        <Route path="/single-router" element={<SingleRoute />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <Skrol />
      <FooterVerh />
      <Footer />
    </div>
  );
}

export default App;
