import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import passwordGeneratorScreenshot from "../../images/password-generator.PNG";
import codeQuizScreenshot from "../../images/code-quiz.PNG";
import dayPlannerScreenshot from "../../images/day-planner.PNG";
import weatherDashboardScreenshot from "../../images/weather-dashboard.PNG";

const Portfolio = () => {
  return (
    // <!-- Grid system for containing the main content of the page -->
    <div class="container">
      <div class="row">
        {/* <!-- This column is here just to make the next column centered --> */}
        <div class="col-lg-1" />
        {/* <!-- This column takes leaves some margins on both sides for most screens, but spans the whole width on very small screens --> */}
        <main class="col-lg-10 col-xs-12 mt-4 content-wrapper">
          {/* <!-- Content subtitle --> */}
          <header>Portfolio</header>
          <PortfolioItem
            name="Password Generator"
            screenshot={passwordGeneratorScreenshot}
            appURL="https://john-paul-grace.github.io/Password-Generator/"
            repoURL="https://github.com/John-Paul-Grace/Password-Generator"
          />

          <hr />

          <PortfolioItem
            name="Code Quiz"
            screenshot={codeQuizScreenshot}
            appURL="https://john-paul-grace.github.io/Code-Quiz/"
            repoURL="https://github.com/John-Paul-Grace/Code-Quiz"
          />

          <hr />

          <PortfolioItem
            name="Day Planner"
            screenshot={dayPlannerScreenshot}
            appURL="https://john-paul-grace.github.io/Day-Planner/"
            repoURL="https://github.com/John-Paul-Grace/Day-Planner"
          />

          <hr />

          <PortfolioItem
            name="Weather Dashboard"
            screenshot={weatherDashboardScreenshot}
            appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
            repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
          />
        {/* <!-- Close column --> */}
        </main>
      {/* <!-- Close row --> */}
      </div>
    {/* <!-- Close grid container --> */}
    </div>
  );
}

export default Portfolio;