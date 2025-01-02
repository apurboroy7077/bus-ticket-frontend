import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <Link href={"/my-tickets"}>
            <li className="hover:text-gray-200 cursor-pointer">
              Purchased Tickets
            </li>
          </Link>
          <Link href={"/buy-tickets"}>
            <li className="hover:text-gray-200 cursor-pointer">Buy Tickets</li>
          </Link>
        </ul>

        {/* Hamburger menu for mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-2">
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Home</li>
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">
            About
          </li>
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">
            Services
          </li>
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Blog</li>
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
