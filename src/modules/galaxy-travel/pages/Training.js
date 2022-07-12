import React from "react";
import { HeroImage, TrainingSection } from "../components";

function Training() {
  return (
    <div className="min-h-screen w-full ">
      <HeroImage>
        <h2 className="text-4xl uppercase font-bold">training.</h2>
        <p className="text-xl font-semibold">Pre-Flight & In-Flight Training.</p>
      </HeroImage>
      <TrainingSection />
    </div>
  );
}

export default Training;
