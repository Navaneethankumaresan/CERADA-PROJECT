import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Theme from "./components/Theme";
import Sessions from "./components/Sessions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
