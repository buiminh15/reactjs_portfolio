import React, { useState } from "react";
import { Logo } from "../../../utils/images";
import { FaBars, FaTimes } from "react-icons/fa";
import {IconWrapper} from '../../../components/common'
function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <header className="flex items-center justify-between bg-[#22262a] h-[100px] px-8 text-[#f8f8f8]">
      <img src={Logo} alt="logo" className="cursor-pointer object-cover w-20" />

      {/* menu  */}
      <ul
        className={`hidden md:flex md:gap-8 `}
      >
        <li className="my-2 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          Home
        </li>
        <li className="my-2 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          About
        </li>
        <li className="my-2 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          FAQ
        </li>
        <li className="my-2 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          Contact
        </li>
      </ul>

      <div className="md:hidden" onClick={() => setClick(!click)}>
        {click ? (
          <IconWrapper
            element={<FaTimes />}
            styleProvider={{
              className: " cursor-pointer",
              size: 30,
            }}
          />
        ) : (
          <IconWrapper
            element={<FaBars />}
            styleProvider={{
              className: " cursor-pointer",
              size: 30,
            }}
          />
        )}
      </div>
      {/* mobile menu */}

      <ul
        className={`${
          click ? "left-0" : "-left-[100%]"
        } fixed top-[100px] w-full h-full bg-[#22262a] text-center text-2xl transition-all duration-300 ease-out `}
      >
        <li className="my-8 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          Home
        </li>
        <li className="my-8 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          About
        </li>
        <li className="my-8 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          FAQ
        </li>
        <li className="my-8 md:my-0 cursor-pointer hover:text-[#808080] duration-200 ease-in">
          Contact
        </li>
      </ul>

    </header>
  );
}

export default Navbar;
