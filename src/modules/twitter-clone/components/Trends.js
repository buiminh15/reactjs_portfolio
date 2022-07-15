import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { IconWrapper, TextBox } from "../../../components/common";
import { generateTwitterTrends } from "../../../utils/data";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function SearchBox() {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
      <SearchIcon className="w-5 h-5 text-gray-500" />
      <TextBox
        placeholder="Search Twitter"
        styleInput="outline-none bg-gray-100"
      />
    </div>
  );
}

function TrendList() {
  return (
    <div className="min-h-screen bg-gray-100 rounded-2xl">
      <div className=" p-4 rounded-2xl sticky -top-80  ">
        <h1 className="font-black text-xl">Trends For You</h1>
      </div>
      <ul className="">
        {generateTwitterTrends(10).map((item) => (
          <TrendItem
            key={item.id}
            author={item.author}
            trending_country={item.trending_country}
            tweet_no={item.tweet_no}
          />
        ))}
      </ul>
    </div>
  );
}

function TrendItem({ trending_country, author, tweet_no }) {
  return (
    <li className="flex items-center justify-between text-gray-500 hover:bg-gray-200 hover-transition px-4 py-6">
      <div>
        <h2 className="text-sm font-semibold">{trending_country}</h2>
        <h2 className="text-black font-bold">{author}</h2>
        <h2 className="text-sm font-semibold">{tweet_no}K Tweets</h2>
      </div>
      <div className="hover:bg-sky-100 p-2 hover-transition rounded-full">
        <IconWrapper
          element={<BiDotsHorizontalRounded />}
          styleProvider={{
            size: 16,
            className: "text-gray-600 cursor-pointer hover:text-sky-500",
          }}
        />
      </div>
    </li>
  );
}

function Trends() {
  return (
    <aside className="hidden lg:block px-8">
      <div className="sticky top-0 py-3 bg-white">
        <SearchBox />
      </div>
      <TrendList />
    </aside>
  );
}

export default Trends;
