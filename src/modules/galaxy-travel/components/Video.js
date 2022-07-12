import React from "react";
import { GalaxySpaceVideo } from "../../../utils/images";
import Button from "./Button";

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

      <div className=" w-full h-full flex flex-col items-center justify-center text-white text-center gap-4">
        <h1 className="text-6xl font-bold">Galaxy. Travel.</h1>
        <p className="uppercase text-3xl font-light">World's first civilian space travel.</p>
        <div className="flex gap-2">
          <Button title="training" url="/galaxy/contact"/>
          <Button title="launch" flag url="/galaxy/contact"/>
        </div>
      </div>
    </div>
  );
}

export default Video;
