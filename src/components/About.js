import React from "react";

function About() {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-white px-4"
    >
      <div className="h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] sm:text-right">
            About
          </h2>
          <div></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <p className="text-4xl font-bold sm:text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae quam animi.
          </p>
          <p className="text-[#d1d5db]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at
            esse ratione.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
