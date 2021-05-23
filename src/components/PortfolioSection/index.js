import React from "react";
import weatherDashboardScreenshot from "../../images/weather-dashboard.PNG";
import PortfolioHeader from "../PortfolioHeader";
import PortfolioItem from "../PortfolioItem";

const PortfolioSection = () => {
  return (
    <div className="grid gap-4">
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