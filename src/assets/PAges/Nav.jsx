import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-emerald-900 text-white shadow-md">
      <nav className="flex justify-between items-center h-[80px] px-6">
        <h1 className="font-bold text-4xl mx-4">Prodevopz</h1>

        <ul className="flex gap-8 items-center">
          <li>
            <Link
              to="/"
              className="font-Teko text-2xl font-bold hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="font-Teko text-2xl font-bold hover:text-yellow-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="font-poppins text-2xl font-bold hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
