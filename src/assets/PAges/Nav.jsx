import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-900 text-white shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center h-[80px] px-6 md:px-12">
        <h1 className="font-bold text-3xl md:text-4xl font-poppins">Prodevopz</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link to="/" className="font-Teko text-2xl font-bold hover:text-yellow-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="font-Teko text-2xl font-bold hover:text-yellow-400 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="font-poppins text-2xl font-bold hover:text-yellow-400 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-emerald-800 text-white py-4 space-y-4">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-yellow-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
