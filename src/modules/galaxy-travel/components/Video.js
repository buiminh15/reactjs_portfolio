import React from "react";
import { GalaxySpaceVideo } from "../../../utils/images";

function Video() {
  return (
    <div className="w-full h-screen object-contain">
      <video
        autoPlay
        loop
        muted
        className="fixed w-full h-full object-cover -z-[1]"
      >
        <source src={GalaxySpaceVideo} type="video/mp4" />
      </video>

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-6xl">Galaxy. Travel.</h1>
        <p>World's first civilian space travel.</p>
      </div>
    </div>
  );
}

export default Video;
