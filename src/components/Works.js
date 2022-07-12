import React from "react";
import { WorkImage } from "../utils/images";

function WorkCard({ linkWeb, linkGithub }) {
  return (
    <div
      style={{ backgroundImage: `url(${WorkImage})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div min-h-[250px]"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          React JS Application
        </span>
        <div className="pt-8 text-center">
          <a href={linkWeb}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={linkGithub}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Works() {
  return (
    <section name="work" className="w-full h-screen bg-[#0a192f] text-white px-4">
      <div className="h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] sm:text-right">
            Work
          </h2>
          <div></div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <WorkCard linkGithub={"/"} linkWeb="/" />
        </div>
      </div>
    </section>
  );
}

export default Works;
