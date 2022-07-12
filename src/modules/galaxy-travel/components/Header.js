import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconWrapper } from "../../../components/common";

const menu = [
  {
    id: 1,
    name: "home",
    url: "/galaxy",
  },
  {
    id: 2,
    name: "pricing",
    url: "/galaxy/pricing",
  },
  {
    id: 3,
    name: "training",
    url: "/galaxy/training",
  },
  {
    id: 4,
    name: "contact",
    url: "/galaxy/contact",
  },
];

function Header() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    changeColor();
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [color]);

  return (
    <header
      className={`${
        color ? "bg-black/[.8]" : ""
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="flex items-center justify-between px-6 h-[90px]">
        <h2 className="uppercase text-3xl text-white font-extrabold cursor-pointer">
          glx trvl
        </h2>

        <ul className="hidden lg:flex gap-5">
          {menu.map((item) => (
            <li
              key={`navbar-menu-id-${item.id}`}
              className="capitalize text-white font-bold text-xl hover:text-[#c3c3c3] duration-150 ease-out"
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className="text-white cursor-pointer lg:hidden"
          onClick={() => setClick(!click)}
        >
          {click ? (
            <IconWrapper element={<FaTimes />} styleProvider={{ size: 20 }} />
          ) : (
            <IconWrapper element={<FaBars />} styleProvider={{ size: 20 }} />
          )}
        </div>

        <ul
          className={`${
            click ? "left-0" : "-left-[100%]"
          } fixed top-0 bg-black/[.9] h-full w-full gap-12 flex flex-col items-center pt-48 duration-500 ease-in -z-[1]`}
        >
          {menu.map((item) => (
            <li
              key={`navbar-menu-id-${item.id}`}
              className="capitalize text-white font-bold text-3xl hover:text-[#c3c3c3] duration-150 ease-out"
              onClick={() => setClick(false)}
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
