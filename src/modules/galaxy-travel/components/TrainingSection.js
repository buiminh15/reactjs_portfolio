import React from "react";
import { Link } from "react-router-dom";
import { GalaxyMoon, GalaxyPod } from "../../../utils/images";

function TrainingSection() {
  return (
    <div className="w-full bg-black text-white py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
        <div className="max-w-[600px] mx-auto flex flex-col text-center justify-center items-center gap-4 ">
          <h3 className="capitalize text-3xl font-bold mt-20">training</h3>
          <p className="text-sm">
            Thorough training is a necessity when traveling to space. We offer
            all inclusive training for pre-flight and in-flight scenarios.
          </p>
          <Link
            to="../contact"
            className="uppercase border border-white py-3 px-6 text-xl "
          >
            contact
          </Link>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-8 ">
            <div className="col-start-2 col-end-6 row-start-1 row-end-1 z-[6] pt-[20%]">
              <img
                src={GalaxyMoon}
                alt="moon"
                className=" border border-[#333] "
              />
            </div>
            <div className="col-start-4 col-end-8 row-start-1 row-end-1 z-[5]">
              <img
                src={GalaxyPod}
                alt="pod"
                className=" border border-[#333] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
