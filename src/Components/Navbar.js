import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logo from "../Images/Logo/HydroMachines.jpg";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link
          className="text-primary hover:bg-[#0e1f510d] font-semibold	text_raleway"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-primary hover:bg-[#0e1f510d] font-semibold	text_raleway"
          to="/about-us"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:bg-[#0e1f510d] font-semibold	text_raleway"
          to="/services"
        >
          Our Services
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:bg-[#0e1f510d] font-semibold	text_raleway"
          to="/products"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className="text-primary hover:bg-[#0e1f510d] font-semibold	text_raleway"
          to="/events"
        >
          Events
        </Link>
      </li>
      <li className="xl:flex hidden">
        <HashLink
          to="about-us/#contact"
          className="btn ml-4 text-white normal-case font-semibold text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-5 py-2.5 text_raleway"
        >
          Get In Touch
        </HashLink>
      </li>
    </>
  );
  return (
    <div className="navbar relative bg-base-100 lg:mx-20 mx-5 lg:mb-8 mb-5 2xl:py-7 xl:py-6 sm:py-4 py-3 2xl:px-9 xl:px-7 sm:px-5 pl-4 drop-shadow-2xl rounded-2xl w-[unset]">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost p-0 hover:bg-white normal-case text-xl content-center gap-x-2.5"
        >
          <img
            className="2xl:w-16 xl:w-14 md:w-12 w-10"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col items-start">
            <p className="text-primary font-black 2xl:text-4xl xl:text-3xl sm:text-2xl text-xl text_raleway">
              Hydro Machines Ltd.
            </p>
          </div>
        </Link>
      </div>
      <div className="hidden xl:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="dropdown dropdown-end xl:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content sm:mt-7 mt-4 px-2 py-4 shadow bg-base-100 rounded-box w-52"
        >
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
