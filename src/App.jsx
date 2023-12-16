import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Home";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="/p/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
