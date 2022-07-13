import React from "react";
import { GalaxyHeroImg } from "../../../utils/images";
function HeroImage({ children }) {
  return (
    <div className="h-[50vh] relative bg-black/[.3]">
      <img loading="lazy" src={GalaxyHeroImg} alt="hero image" className="w-full h-full absolute top-0 left-0 z-[-1] bg-center object-cover"/>
      <div className="text-white h-full flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

export default HeroImage;
