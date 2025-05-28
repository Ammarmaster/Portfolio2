import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-emerald-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-[80px]">
        <h1 className="text-4xl font-bold font-poppins">Prodevopz</h1>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-2xl font-semibold hover:text-yellow-400 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="text-2xl font-semibold hover:text-yellow-400 transition-all"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-2xl font-semibold hover:text-yellow-400 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
