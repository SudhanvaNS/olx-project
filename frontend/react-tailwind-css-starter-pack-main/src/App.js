import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "../src/pages/home"
import Login from "../src/pages/login"
import Signup from "../src/pages/signup"
import Product from "../src/pages/prodect"
import Getall1 from "../src/pages/getallone";
import Sell from "../src/pages/sell";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login"element={<Login />}/>
    <Route path="/signup"element={<Signup />}/>
    <Route path="/product"element={< Product/>}/>
    <Route path="/getallone"element= {<Getall1/>}/>
    <Route path="/sell" element={<Sell/>}/>
    </Routes>
  );
}

export default App;
