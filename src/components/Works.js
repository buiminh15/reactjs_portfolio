import React from "react";
import { worksData } from "../utils/data";
import { Link } from "react-router-dom";

function WorkCard({ src, tech, linkWeb, linkGithub, externalLink, desc }) {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto content-div min-h-[340px]">
      <div className="relative cursor-pointer">
        <img
          loading="lazy"
          src={src}
          alt="work image"
          className="max-h-[140px] w-full object-cover rounded-t-md"
        />

        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 bg-black/[.5] w-full h-full p-3 text-[#f8f8f8]">
          <span className="font-bold tracking-wider">
            Description:
          </span>
          <p>{desc}</p>
        </div>
      </div>

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
            {externalLink ? (
              <a
                href={linkWeb}
                target="_blank"
                className="border border-white px-4 py-2 hover:bg-[#db2777] hover:border-[#db2777]"
              >
                Demo
              </a>
            ) : (
              <Link
                to={linkWeb}
                className="border border-white px-4 py-2 hover:bg-[#db2777] hover:border-[#db2777]"
              >
                Demo
              </Link>
            )}
            <a
              href={linkGithub}
              target="_blank"
              className="border border-white px-4 py-2 hover:bg-[#db2777] hover:border-[#db2777]"
            >
              Github
            </a>
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
        <div className="grid grid-cols-1 sm:w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] max-w-max">
            Work
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          {worksData.map((item) => (
            <WorkCard
              key={`work-item-${item.id}`}
              linkGithub={item.linkGithub}
              linkWeb={item.linkWeb}
              src={item.src}
              tech={item.tech}
              externalLink={item?.external}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
