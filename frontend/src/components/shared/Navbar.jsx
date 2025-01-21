import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <Link to="/" className="text-2xl font-bold transition">
          <span className="text-white">Travel</span>
          <span className="text-blue-500 hover:text-blue-300">Mate</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/tours" className="text-white hover:text-blue-500 transition">
            Tours
          </Link>
          <Link to="/about" className="text-white hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500 transition">
            Contact
          </Link>
          <Link to="/signin" className="text-white hover:text-blue-500 transition">
            Sign In
          </Link>
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-gray-300 focus:outline-none hover:text-white"
          aria-label="Toggle Navigation"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
