import React from "react";
import { IconWrapper, TextBox } from "../../../components/common";
import { AvatarIcon } from "../../../utils/images";
import Avatar from "./Avatar";
import {
  BiCalendarCheck,
  BiImageAlt,
  BiHappy,
  BiBeenHere,
  BiPoll,
  BiCategory,
  BiDotsHorizontalRounded,
  BiChat,
  BiRepost,
  BiHeart,
  BiUpload,
} from "react-icons/bi";
import { generateTwitterPosts } from "../../../utils/data";

const icons = [
  {
    id: 1,
    icon: <BiImageAlt />,
  },
  {
    id: 2,
    icon: <BiCategory />,
  },
  {
    id: 3,
    icon: <BiPoll />,
  },
  {
    id: 4,
    icon: <BiHappy />,
  },
  {
    id: 5,
    icon: <BiCalendarCheck />,
  },
  {
    id: 6,
    icon: <BiBeenHere />,
  },
];

function TweetPosting() {
  return (
    <div className="p-4 grid grid-cols-[auto,1fr] gap-4 border-b-[0.1px]">
      <Avatar src={AvatarIcon} alt="user avatar" />
      <div className="w-full space-y-10">
        <TextBox
          placeholder="What's happening?"
          styleInput="outline-none text-xl tracking-wide"
        />
        <div className="flex items-center justify-between">
          <ul className="flex gap-2">
            {icons.map((icon, index) => (
              <li
                key={`icon-od-${index}`}
                className="hover:bg-sky-100 p-2 rounded-full hover-transition cursor-pointer"
              >
                <IconWrapper
                  key={`tweet-posting-icon-${icon.id}`}
                  element={icon.icon}
                  styleProvider={{ size: 20, className: "text-sky-400" }}
                />
              </li>
            ))}
          </ul>
          <div className="px-6 py-2 bg-sky-400 rounded-full cursor-pointer hover:bg-sky-300 hover-transition">
            <span className="font-bold text-sm text-white">Tweet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Post({
  src,
  name,
  nickname,
  postedTime,
  content,
  replyNum,
  retweetNum,
  likesNum,
}) {
  return (
    <article className="grid grid-cols-[auto,1fr] gap-4 p-4">
      <Avatar src={src} alt="user avatar" />
      <div className="flex flex-col gap-3">
        {/* heading */}
        <div className="flex items-center justify-between py-1">
          <div className="flex gap-1 text-sm">
            <span className="font-bold ">{name}</span>
            <span className="text-gray-500">
              @{nickname}
              <span className="font-bold mx-1">•</span>
              {postedTime}
            </span>
          </div>
          <div>
            <IconWrapper
              element={<BiDotsHorizontalRounded />}
              styleProvider={{
                size: 16,
                className: "text-gray-600, cursor-pointer",
              }}
            />
          </div>
        </div>
        {/* content */}
        <p className="leading-6">{content}</p>
        <div className="flex items-center justify-between">
          {/* icon 1 */}
          <div className="flex items-center gap-2 text-black group cursor-pointer">
            <div className="p-2 group-hover:bg-sky-100 group-hover:text-sky-600 rounded-full hover-transition">
              <IconWrapper element={<BiChat />} styleProvider={{ size: 20 }} />
            </div>
            <span className="text-xs group-hover:text-sky-600">{replyNum}</span>
          </div>
          {/* icon 2 */}
          <div className="flex items-center gap-2 text-black group cursor-pointer">
            <div className="p-2 group-hover:bg-green-100 group-hover:text-green-600 rounded-full hover-transition">
              <IconWrapper
                element={<BiRepost />}
                styleProvider={{ size: 20 }}
              />
            </div>
            <span className="text-xs group-hover:text-green-600">
              {retweetNum}
            </span>
          </div>
          {/* icon 3 */}
          <div className="flex items-center gap-2 text-black group cursor-pointer">
            <div className="p-2 group-hover:bg-red-100 group-hover:text-red-600 rounded-full hover-transition">
              <IconWrapper element={<BiHeart />} styleProvider={{ size: 20 }} />
            </div>
            <span className="text-xs group-hover:text-red-600">{likesNum}</span>
          </div>
          {/* icon  */}
          <div className="flex items-center gap-2 text-black group cursor-pointer">
            <div className="p-2 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full hover-transition">
              <IconWrapper
                element={<BiUpload />}
                styleProvider={{ size: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MainTweeting() {
  return (
    <section className="w-full min-h-screen ">
      <div className="px-4 py-6 sticky top-0">
        <h2 className="font-bold text-xl ">Home</h2>
      </div>
      <TweetPosting />
      <ul>
        {generateTwitterPosts(20).map((item) => (
          <li className="border-b-[0.1px]" key={`post-id-${item.id}`}>
            <Post
              src={item.avatar}
              name={item.name}
              nickname={item.nickname}
              postedTime={item.postedTime}
              content={item.content}
              replyNum={item.replyNum}
              retweetNum={item.retweetNum}
              likesNum={item.likesNum}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MainTweeting;
