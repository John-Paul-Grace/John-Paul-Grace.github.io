import React from "react";
import headshot from "../../images/JPG-Headshot.jpg";

const AboutMe = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        <main className="content-wrapper col-span-2 row-span-4">
          <header>About Me</header>
          <img className="float-left mr-3 mb-3" src={headshot} width="250px" alt= "Headshot of John Paul Grace" />
          <p>
              I am a fledgeling full-stack web developer who has been doing back-end programs for years. I began studying computer science in middle school when I joined an afterschool S.T.E.M. club. We made small programs and robotics with Arduino, and I instantly fell in love with programming. I am fluent in Java, have studied Python, and am currently studying HTML, CSS, and JavaScript. Although I wish to become a full-stack developer, my true passion lies in the logical problem-solving of back-end development.
          </p>
          <p className="float-left">
              As for more personal information, I am currently twenty years-old and live in the town of Highlands, NC. I attended Highlands High School, and, for a time, I studied at UNC-Chapel Hill for a degree in computer science. 
          </p>
        </main>

        <div className="bg-green-500 col-start-3 col-end-4 row-span-2">1</div>
        <div className="bg-green-500 col-start-4 col-end-5 row-span-2">2</div>
        <div className="bg-green-500 col-start-3 col-end-4 row-span-2">3</div>
        <div className="bg-green-500 col-start-4 col-end-5 row-span-2">4</div>
      </div>
    </div>
  );
}

export default AboutMe;