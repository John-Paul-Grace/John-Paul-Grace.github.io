import React from "react";
import headshot from "../../images/JPG-Headshot.jpg";
import AboutMe from "../AboutMe";
import Skills from "../Skills";

const Introduction = () => {
  return (
    <div className="p-3 grid grid-col-3 grid-row-3 gap-2 content-wrapper">

      <div className="header col-span-3 row-span-1">Introduction</div>

      <img className="col-span-1 row-span-2 rounded-xl" src={headshot} width="300px" alt="Headshot of John Paul Grace" />

      <div className="col-span-2 row-span-1">
        <AboutMe />
      </div>

      <div className="col-span-2 row-span-1 border-red-500 border-4">
        <Skills />
      </div>
    </div>
  );
}

export default Introduction;