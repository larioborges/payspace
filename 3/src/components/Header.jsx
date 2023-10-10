import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8"
      aria-label="Global"
    >
      <div className="flex flex-1">
        <NavLink to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">PaySpace</span>
          <img
            className="h-8 w-auto"
            src="https://www.payspace.com/wp-content/uploads/2020/05/payspace-logo-new.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className="flex gap-x-10">
        <NavLink
          to="/"
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 text-sm font-semibold leading-6 text-gray-900"
        >
          Home
        </NavLink>
        <NavLink
          to="books"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Books
        </NavLink>
        <NavLink to='about' className='text-sm font-semibold leading-6 text-gray-900'>
          About
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
