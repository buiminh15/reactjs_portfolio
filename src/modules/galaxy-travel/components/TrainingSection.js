import React from "react";
import { Link } from "react-router-dom";
import { GalaxyMoon, GalaxyPod } from "../../../utils/images";

function TrainingSection() {
  return (
    <div className="w-full bg-black text-white py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:max-w-[1140px] md:mx-auto">
        <div className="flex flex-col items-center justify-center my-10 w-[80%] text-center gap-4">
          <h3 className="capitalize text-3xl font-bold mt-20">training</h3>
          <p className="text-sm">
            Thorough training is a necessity when traveling to space. We offer
            all inclusive training for pre-flight and in-flight scenarios.
          </p>
          <Link
            to="galaxy/contact"
            className="uppercase border border-white py-3 px-6 text-xl"
          >
            contact
          </Link>
        </div>

        <div className="w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[5]">
            <img
              src={GalaxyMoon}
              alt="moon"
              className="h-full border border-[#333] "
            />
          </div>
          <div className="absolute top-1/2 left-1/2 max-w-[80%] z-[4]">
            <img
              src={GalaxyPod}
              alt="pod"
              className="w-full border border-[#333] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
