import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconWrapper } from "./common";

const menu = [
  {
    id: 1,
    name: "Home",
    to: "home",
  },
  {
    id: 2,
    name: "About",
    to: "about",
  },
  {
    id: 3,
    name: "Skills",
    to: "skills",
  },
  {
    id: 4,
    name: "Work",
    to: "work",
  },
];
function Header() {
  const [click, setClick] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-[#0a192f] text-gray-300 px-8">
      <div className="h-[80px] flex items-center justify-between">
        <Link to="/" className=" text-2xl font-semibold">
          Minh<span className="text-[#db2777]">.dev</span>
        </Link>

        <ul className="hidden md:flex md:gap-8 text-xl">
          {menu.map((item) => (
            <li
              key={`nav-menu-id-${item.id}`}
              className=" cursor-pointer hover:text-[#db2777] duration-200 ease-in"
            >
              <LinkScroll to={item.to} smooth={true} duration={500}>
                {item.name}
              </LinkScroll>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={() => setClick(!click)}>
          {click ? (
            <IconWrapper
              element={<FaTimes />}
              styleProvider={{
                className: " cursor-pointer",
                size: 20,
              }}
            />
          ) : (
            <IconWrapper
              element={<FaBars />}
              styleProvider={{
                className: " cursor-pointer",
                size: 20,
              }}
            />
          )}
        </div>

        {/* mobile menu */}

        <ul
          className={`${
            click ? "left-0" : "-left-[100%]"
          } fixed top-[80px] w-full h-full bg-[#0a192f] text-center text-2xl transition-all duration-300 ease-out md:hidden`}
        >
          {menu.map((item) => (
            <li
              key={`nav-menu-id-${item.id}`}
              className="my-8 md:my-0 cursor-pointer hover:text-[#db2777] duration-200 ease-in"
            >
              <LinkScroll
                onClick={() => setClick(false)}
                to={item.to}
                smooth={true}
                duration={500}
              >
                {item.name}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
