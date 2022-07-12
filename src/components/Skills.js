import React from "react";
import { skillsData } from "../utils/images";

function SkillCard({ src, name }) {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={src} alt={`${name} icon`} />
      <p className="my-4">{name}</p>
    </div>
  );
}

function Skills() {
  return (
    <section
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-white px-4"
    >
      <div className="h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] ">
            Skills
          </h2>
          <div></div>
        </div>

        <div className="w-full text-center grid grid-cols-2 sm:grid-cols-4 sm:max-w-[1000px] sm:mx-auto gap-4 mt-8">
          {skillsData.map((item) => (
            <SkillCard
              key={`skill-card-id-${item.id}`}
              src={item.src}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
