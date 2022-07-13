import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { IconWrapper } from "../../../components/common";

function ContactItem({ element, children }) {
  return (
    <div className="flex items-center gap-8">
      <IconWrapper element={element} styleProvider={{ size: 20 }} />
      <div>{children}</div>
    </div>
  );
}
function Footer() {
  let location = useLocation();
  const [bgBlack, setBgBlack] = useState(false);
  useEffect(() => {
    if(location.pathname !== '/galaxy') {
      setBgBlack(true)
    }
  }, [location.pathname])
  
  
  return (
    <footer className={`w-full ${bgBlack ? 'bg-black' : 'bg-black/[.8]'}`}>
      <div className="text-white max-w-[1140px] mx-auto py-24">
        <div className="grid grid-cols-1 px-10 gap-10 xl:px-0 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-8">
            <ContactItem element={<FaSearchLocation />}>
              <p className="text-xl">123 Acme St.</p>
              <h4 className="font-bold text-xl">Houston, Tx</h4>
            </ContactItem>
            <ContactItem element={<FaPhone />}>
              <h4 className="font-bold text-xl">1-800-123-1234</h4>
            </ContactItem>
            <ContactItem element={<FaMailBulk />}>
              <h4 className="font-bold text-xl">trips@galaxy.com</h4>
            </ContactItem>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <h1 className="text-xl font-bold">About the company</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              eveniet soluta voluptate ipsa veritatis nisi ad atque deleniti
              ipsam harum.
            </p>
            <div className="flex gap-4">
              <IconWrapper
                element={<FaFacebook />}
                styleProvider={{ size: 30, className: "cursor-pointer" }}
              />
              <IconWrapper
                element={<FaTwitter />}
                styleProvider={{ size: 30, className: "cursor-pointer" }}
              />
              <IconWrapper
                element={<FaLinkedin />}
                styleProvider={{ size: 30, className: "cursor-pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
