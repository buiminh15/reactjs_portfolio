import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TextBox } from "../../../components/common";

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
  return <div className="min-h-screen">
    <div className="bg-gray-100 py-4 rounded-2xl sticky -top-80">
      <h1 className="">Trends For You</h1>

      <div></div>
    </div>
  </div>
}

function Trends() {
  return (
    <aside className="hidden xl:block px-8">
      <div className="sticky top-0 py-3 bg-white">
        <SearchBox />
      </div>
      <TrendList />
    </aside>
  );
}

export default Trends;
