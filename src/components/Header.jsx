import React, { useState } from "react";
import { Link } from "react-scroll";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Header() {
  const links = [
    { id: 1, name: "Accueil", link: "home" },
    { id: 2, name: "À propos", link: "about" },
    { id: 3, name: "Projets", link: "project" },
    { id: 3, name: "Expériences", link: "experience" },
    { id: 4, name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-black md:px-10 px-7">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-center justify-between py-4">
          {/* Section logo */}
          <div className="font-bold md:text-4xl text-2xl cursor-pointer flex items-center gap-1">
            <span className="text-blue-400 hover:text-white transition-all duration-500">
              Nicolas
            </span>
          </div>

          {/* Mobile menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="w-7 h-7 right-8 top-5 cursor-pointer md:hidden text-white absolute"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          {/* Link items */}
          <ul
            className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-gray-600 md:bg-transparent transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li key={link.id} className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link
                  activeClass="active"
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="py-2 text-white text-lg cursor-pointer hover:text-blue-400 link-underline transition-all duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
