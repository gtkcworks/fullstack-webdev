import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
 import Home from "./pages/Home";
 import About from "./pages/About";
 import User from "./pages/User"

 function App() {
   return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
    </>
   );
 }

export default App
