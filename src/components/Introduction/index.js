import React from "react";
import headshot from "../../images/JPG-Headshot.jpg";
import AboutMe from "../AboutMe";
import Skills from "../Skills";

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="grid grid-col-3 grid-row-3 gap-1 pb-3 mb-10 rounded-xl bg-white border-green-600 border-8"
    >
      <div
        className="text-white text-3xl font-bold text-center py-3 bg-red-900 border-b-8 border-green-600 col-span-3 row-span-1"
      >
        Introduction
      </div>

      <img
        className="col-span-1 row-span-2 rounded-xl mx-2 border-black border-2"
        src={headshot}
        width="300px"
        alt="Headshot of John Paul Grace"
      />

      <AboutMe />

      <Skills />
    </div>
  );
}

export default Introduction;