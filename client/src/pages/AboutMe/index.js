import React from "react";
import headshot from "../../images/JPG-Headshot.jpg";

const AboutMe = () => {
  return (
    // Grid system for containing the main content of the page
    <div class="container">
      <div class="row">
        {/* This column is here just to make the next column centered */}
        <div class="col-lg-1" />
        {/* This column takes leaves some margins on both sides for most screens, but spans the whole width on very small screens */}
        <main class="col-lg-10 col-xs-12 mt-4 content-wrapper">
          {/* Content subtitle */}
          <header>About Me</header>
          {/* An image that should have one paragraph of text to the right and one paragraph below */}
          <img class="float-left mr-3 mb-3" src={headshot} width="250px" alt= "Headshot of John Paul Grace" />
          {/* This paragraph should be beside the image */}
          <p>
              I am a fledgeling full-stack web developer who has been doing back-end programs for years. I began studying computer science in middle school when I joined an afterschool S.T.E.M. club. We made small programs and robotics with Arduino, and I instantly fell in love with programming. I am fluent in Java, have studied Python, and am currently studying HTML, CSS, and JavaScript. Although I wish to become a full-stack developer, my true passion lies in the logical problem-solving of back-end development.
          </p>
          {/* This paragraph should be below the image */}
          <p class="float-left">
              As for more personal information, I am currently twenty years-old and live in the town of Highlands, NC. I attended Highlands High School, and, for a time, I studied at UNC-Chapel Hill for a degree in computer science. 
          </p>
        {/* Close column */}
        </main>
      {/* Close row */}
      </div>
    {/* Close grid container */}
    </div>
  );
}

export default AboutMe;