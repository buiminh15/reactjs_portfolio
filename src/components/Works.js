import React from "react";
import { worksData } from "../utils/data";
import { Link } from "react-router-dom";

function WorkCard({ src, tech, linkWeb, linkGithub }) {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto content-div min-h-[300px]">
      <img
        src={src}
        alt="work image"
        className="max-h-[120px] w-full object-cover rounded-t-md"
      />
      <div className="px-4 pt-3 h-full relative">
        <h3 className="font-semibold">Tech Stack</h3>
        <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {tech?.map((item, index) => (
            <li key={`tech-stack-id-${index}`} className="text-[#d1d5db]">
              - {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-5 left-0 w-full">
          <div className="w-full flex items-center justify-center gap-4">
            <Link
              to={linkWeb}
              className="border border-white px-4 py-2 hover:bg-[#db2777] hover:border-[#db2777]"
            >
              Demo
            </Link>
            <Link
              to={linkGithub}
              className="border border-white px-4 py-2 hover:bg-[#db2777] hover:border-[#db2777]"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Works() {
  return (
    <section
      name="work"
      className="w-full h-screen bg-[#0a192f] text-white px-4"
    >
      <div className="h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] sm:text-right">
            Work
          </h2>
          <div></div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          {worksData.map((item) => (
            <WorkCard
              key={`work-item-${item.id}`}
              linkGithub={item.linkGithub}
              linkWeb={item.linkWeb}
              src={item.src}
              tech={item.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
