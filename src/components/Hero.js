import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IconWrapper } from "./common";
function Hero() {
  return (
    <section name="home" className="bg-[#0a192f] w-full min-h-screen text-white px-8 ">
      <div className="min-h-[calc(100vh-80px)] md:max-w-[1000px] md:mx-auto flex flex-col justify-center items-start gap-2">
        <p className="text-[#db2777]">Hi, my name is</p>
        <p className="text-[#ccd6f6] text-4xl sm:text-6xl font-bold">Minh</p>
        <p className="text-[#8892b0] text-4xl sm:text-6xl font-bold">
          I'm a Full Stack <br />
          Developer.
        </p>
        <p className="text-[#8892b0] sm:text-xl mt-2">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div className="border border-white px-6 py-3 flex items-center gap-4 cursor-pointer mt-4 hover:bg-[#db2777] hover:border-[#db2777] duration-300 ease-out">
          <Link to="work" smooth={true} duration={500}>
            View Work
          </Link>

          <IconWrapper
            element={<HiArrowNarrowRight />}
            styleProvider={{ size: 20 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
