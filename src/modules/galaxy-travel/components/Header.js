import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconWrapper } from "../../../components/common";

const menu = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "pricing",
  },
  {
    id: 3,
    name: "training",
  },
  {
    id: 4,
    name: "contact",
  },
];

function Header() {
  const [click, setClick] = useState(false);

  return (
    <header className={` fixed top-0 left-0 w-full`}>
      <div className="flex items-center justify-between px-6 h-[90px]">
        <h2 className="uppercase text-3xl text-white font-extrabold">
          glx trvl
        </h2>

        <ul className="hidden lg:flex gap-5">
          {menu.map((item) => (
            <li
              key={`navbar-menu-id-${item.id}`}
              className="capitalize text-white font-bold text-xl hover:text-[#c3c3c3] duration-150 ease-out"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="text-white cursor-pointer lg:hidden" onClick={() => setClick(!click)}>
          {click ? (
            <IconWrapper element={<FaTimes />} styleProvider={{ size: 20 }} />
          ) : (
            <IconWrapper element={<FaBars />} styleProvider={{ size: 20 }} />
          )}
        </div>

        <ul className={`${click ? 'left-0' : '-left-[100%]'} fixed top-0 bg-black/[.9] h-full w-full gap-12 flex flex-col items-center pt-48 duration-500 ease-in -z-[1]`}>
          {menu.map((item) => (
            <li
              key={`navbar-menu-id-${item.id}`}
              className="capitalize text-white font-bold text-3xl hover:text-[#c3c3c3] duration-150 ease-out"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
