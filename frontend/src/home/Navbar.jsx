import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 transition duration-500 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-2xl p-2 rounded-full">🎓</div>
          <div>
            <p className="text-sm font-medium text-white/80">
              Advanced Attendance Management System
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="#home"
              className="text-white font-semibold hover:text-yellow-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white font-semibold hover:text-yellow-400 transition"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#stats"
              className="text-white font-semibold hover:text-yellow-400 transition"
            >
              Statistics
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white font-semibold hover:text-yellow-400 transition"
            >
              About
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2136] border-t border-white/20 px-6 py-4">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <a
                href="#home"
                className="text-white font-semibold hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-white font-semibold hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#stats"
                className="text-white font-semibold hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-semibold hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
