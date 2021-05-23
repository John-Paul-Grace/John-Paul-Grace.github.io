import React from "react";
import headshot from "../../images/JPG-Headshot.jpg";
import weatherDashboardScreenshot from "../../images/weather-dashboard.PNG";
import PortfolioHighlight from "../../components/PortfolioHighlight";
import Footer from "../../components/Footer";

const AboutMe = () => {
  return (
    <div>
      <div className="p-5">
        <div className="grid gap-4 mb-28">
          <main className="content-wrapper col-span-4 row-span-1">
            <header>About Me</header>
            <img className="float-left mr-3 mb-3" src={headshot} width="250px" alt= "Headshot of John Paul Grace" />
            <p>
              I am a fledgeling full-stack web developer who has been doing back-end programs for years. I began studying computer science in middle school when I joined an afterschool S.T.E.M. club. We made small programs and robotics with Arduino, and I instantly fell in love with programming. I am fluent in Java, have studied Python, and am currently studying HTML, CSS, and JavaScript. Although I wish to become a full-stack developer, my true passion lies in the logical problem-solving of back-end development.
            </p>
            <p className="float-left">
              As for more personal information, I am currently twenty years-old and live in the town of Highlands, NC. I attended Highlands High School, and, for a time, I studied at UNC-Chapel Hill for a degree in computer science. 
            </p>
          </main>

          <div className="col-span-4 row-span-1 text-center bg-white text-3xl font-bold p-3 border-8 border-blue-500 rounded-xl">
            Portfolio Highlights
          </div>

          <PortfolioHighlight
            name="Weather Dashboard"
            screenshot={weatherDashboardScreenshot}
            appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
            repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
          />

          <PortfolioHighlight />

          <PortfolioHighlight />

          <PortfolioHighlight />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;