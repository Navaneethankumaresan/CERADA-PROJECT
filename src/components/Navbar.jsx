import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6 fixed w-full top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ICSTEET-2026</h1>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/theme" className="hover:text-yellow-400">Theme</Link></li>
          <li><Link to="/sessions" className="hover:text-yellow-400">Sessions</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
