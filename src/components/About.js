import React from "react";

function About() {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-[#f8f8f8] px-4"
    >
      <div className="h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <h2 className="text-4xl font-bold border-b-4 border-[#db2777] sm:text-right">
            About
          </h2>
          <div></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1000px] sm:mx-auto gap-6 mt-8">
          <p className="text-2xl font-bold sm:text-right">
            Hi, I'm Minh 
            <br />
            I code beautifully simple things, and I love what I do.
          </p>
          <p className="text-[#d1d5db]">
            I'm serious about writing clean code and I'm always looking for an
            opportunity to improve on this existing skill, I suppose that's why
            I enjoy code reviews with my peers so much.
            <br />
            <br />
            I'm passionate about programming and I enjoy learning new things, I
            take advantage of that to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
