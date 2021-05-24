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

      <PortfolioItem
        name="Weather Dashboard"
        screenshot={weatherDashboardScreenshot}
        appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
        repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
      />

      <PortfolioItem
        name="Weather Dashboard"
        screenshot={weatherDashboardScreenshot}
        appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
        repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
      />

      <PortfolioItem
        name="Weather Dashboard"
        screenshot={weatherDashboardScreenshot}
        appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
        repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
      />

      <PortfolioItem
        name="Weather Dashboard"
        screenshot={weatherDashboardScreenshot}
        appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
        repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
      />
    </div>
  )
}

export default PortfolioSection;