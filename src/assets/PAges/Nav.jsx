import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-emerald-900 h-[80px] text-white p-4 my-4">
<h1 class='font-bold text-4xl mx-10' >Prodevopz</h1>
            <ul className="flex gap-6 mr-4">
          <li>
            <Link to="/" className="font-Teko text-3xl text-white font-bold  hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/Projects" className="font-Teko text-3xl text-white font-bold hover:text-yellow-400">Projects</Link>
          </li>
          <li>
            <Link to="/Contact" className="font-poppins text-3xl text-white font-bold   hover:text-yellow-400">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Nav;
