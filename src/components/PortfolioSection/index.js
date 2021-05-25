import React from "react";
import weatherDashboardScreenshot from "../../images/weather-dashboard.PNG";
import PortfolioHeader from "../PortfolioHeader";
import PortfolioItem from "../PortfolioItem";

const PortfolioSection = () => {
  return (
    <div
      id="portfolio"
      className="grid gap-4 border-8 border-blue-800 rounded-xl"
    >
      <PortfolioHeader />

      <div className="col-span-2 row-span-1 row-start-2 md:row-start-2">
        <PortfolioItem
          name="Weather Dashboard"
          screenshot={weatherDashboardScreenshot}
          appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
          repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-3 md:row-start-2">
        <PortfolioItem
          name="Weather Dashboard"
          screenshot={weatherDashboardScreenshot}
          appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
          repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-4 md:row-start-3">
        <PortfolioItem
          name="Weather Dashboard"
          screenshot={weatherDashboardScreenshot}
          appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
          repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-5 md:row-start-3">
        <PortfolioItem
          name="Weather Dashboard"
          screenshot={weatherDashboardScreenshot}
          appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
          repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
        />
      </div>
    </div>
  )
}

export default PortfolioSection;