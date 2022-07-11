import React, { useState } from "react";
import { Logo } from "../../utils/images";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconWrapper } from "../common";
function Navbar() {
  const [click, setClick] = useState(false);
  const navbarStyle = click 
  return (
    <header className="flex items-center justify-between bg-[#22262a] h-[100px] px-8">
      <img src={Logo} alt="logo" className="cursor-pointer object-cover w-20" />

      <nav className="text-[#f8f8f8]">
        <ul className={`${click ? 'fixed top-[100px] left-0 w-full h-full bg-[#22262a] text-center text-2xl ' : 'hidden' } md:flex md:gap-8`}>
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
      </nav>
      <div className="md:hidden" onClick={() => setClick(!click)}>
        {click ? (
          <IconWrapper
            element={<FaTimes />}
            styleProvider={{ className: "text-[#f8f8f8] cursor-pointer", size: 30 }}
          />
        ) : (
          <IconWrapper
            element={<FaBars />}
            styleProvider={{ className: "text-[#f8f8f8] cursor-pointer", size: 30 }}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
