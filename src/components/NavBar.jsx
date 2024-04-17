import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/about" },
    { id: 3, text: "Our Services", link: "/services" },
    { id: 4, text: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="bg-black flex justify-around items-center h-24 w-full mx-auto px-4 text-white ">
      <div className="flex flex-row justify-between items-center gap-x-2">
        <div>
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="/images/logo3.jpg"
              alt="brandlogo"
            />
          </Link>
        </div>

        <div>
          <h2 className="w-full text-3xl  font-bold text-[#00df9a]">
            Abdu Consulting
          </h2>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex ">
        {navItems.map((item) => (
          <Link to={item.link} key={item.id}>
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl  cursor-pointer duration-300 hover:text-black "
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
      <div className="hidden md:flex flex-wrap ">
        <Link to="/contact" className="btn ">
          Get In Touch
        </Link>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-20"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Abd Consu.
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.link} key={item.id}>
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
