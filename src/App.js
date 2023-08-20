import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "../src/pages/home"
import Login from "../src/pages/login"
import Signup from "../src/pages/signup"
import Product from "../src/pages/prodect"
import Register from "./pages/register";
import Sell from "./pages/sell";
import getall from "./pages/getall";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={< Product />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/getall" element={<getall />} />
    </Routes>
  );
}

export default App;
