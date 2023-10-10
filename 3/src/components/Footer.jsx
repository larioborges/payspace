import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p>Copyright PaySpace 2023</p>
    <section className="flex gap-x-12 justify-between">
      <NavLink
        to="/"
        className="flex items-center gap-x-1 text-sm font-semibold leading-6"
      >
        Home
      </NavLink>
      <NavLink to="books" className="text-sm font-semibold leading-6">
        Books
      </NavLink>
      <NavLink to="about" className="text-sm font-semibold leading-6">
        About
      </NavLink>
    </section>
  </footer>
);

export default Footer;
