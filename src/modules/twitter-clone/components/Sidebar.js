import React, { useState } from "react";
import { IconWrapper } from "../../../components/common";
import { HomeIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { AvatarIcon } from "../../../utils/images";

const menu = [
  {
    icon: HomeIcon,
    name: "Home",
    to: "",
  },
  {
    icon: HashtagIcon,
    name: "Explore",
    to: "",
  },
  {
    icon: BellIcon,
    name: "Notifications",
    to: "",
  },
  {
    icon: MailIcon,
    name: "Messages",
    to: "",
  },
  {
    icon: BookmarkIcon,
    name: "Bookmarks",
    to: "",
  },
  {
    icon: ViewListIcon,
    name: "Lists",
    to: "",
  },
  {
    icon: UserIcon,
    name: "Profile",
    to: "",
  },
  {
    icon: DotsCircleHorizontalIcon,
    name: "More",
    to: "",
  },
];

function MenuItem({ Icon, name, to, active, handleClick, index }) {
  return (
    <li
      className="rounded-full px-3 py-3 hover:bg-neutral-200 hover-transition xl:px-6"
      onClick={() => handleClick(index)}
    >
      <Link className="flex items-center gap-4" to={to}>
        <Icon className="w-6" />
        <span
          className={`${active ? "font-bold" : ""} hidden xl:inline text-xl duration-150 ease-out`}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}

function TweetButton() {
  return (
    <Link
      to=""
      className="bg-[#0ea5e9] rounded-full h-12 w-12 flex items-center justify-center xl:py-4 xl:min-w-[80%] hover:bg-sky-400 hover-transition"
    >
      <span className="text-white font-bold hidden xl:inline">Tweet</span>
      <div className=" w-6 h-6 xl:hidden">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="#F8FAFC">
          <g>
            <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
          </g>
        </svg>
      </div>
    </Link>
  );
}

function Me({ name, nickname }) {
  return (
    <div className="flex items-center justify-between gap-10 px-3 py-3 hover:bg-neutral-200 rounded-full hover-transition">
      <div className="flex items-center gap-3">
        <Avatar src={AvatarIcon} alt="profile" />
        <div className="hidden xl:flex flex-col">
          <h3 className="text-lg font-bold ">{name}</h3>
          <h4 className="text-sm text-[#737373] -mt-1">{nickname}</h4>
        </div>
      </div>
      <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 xl:block hidden cursor-pointer" />
    </div>
  );
}

function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <aside className="hidden md:flex flex-col items-center xl:items-start justify-between gap-5 px-2 py-4 h-screen text-[#1e293b]">
      <div className="flex flex-col gap-5 items-center xl:items-start w-full">
        <Link to="" className="w-full px-3 xl:px-6 grid place-items-center xl:block">
          <IconWrapper
            element={<FaTwitter />}
            styleProvider={{ size: 30, className: "text-[#0ea5e9] " }}
          />
        </Link>

        <ul className="flex flex-col w-full gap-2 items-center xl:items-start">
          {menu.map((item, index) => (
            <MenuItem
              key={`nav-item-${index}`}
              Icon={item.icon}
              name={item.name}
              to={item.to}
              active={active === index}
              handleClick={setActive}
              index={index}
            />
          ))}
        </ul>
        <TweetButton />
      </div>
      <Me name="Jasmin Chew" nickname="@jasminchew" />
    </aside>
  );
}

export default Sidebar;
