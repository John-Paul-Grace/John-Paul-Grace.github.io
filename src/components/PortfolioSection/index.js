import React from "react";
import weatherDashboardScreenshot from "../../images/weather-dashboard.PNG";
import nightsInScreenshot from "../../images/nights-in.PNG";
import munchiesScreenshot from "../../images/munchies.PNG";
import budgetTrackerScreenshot from "../../images/budget-tracker.PNG";
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
          description="An app that allows users to check the current and future forecasts in a given city."
          screenshot={weatherDashboardScreenshot}
          appURL="https://john-paul-grace.github.io/Weather-Dashboard/"
          repoURL="https://github.com/John-Paul-Grace/Weather-Dashboard"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-3 md:row-start-2">
        <PortfolioItem
          name="Nights In"
          description="An app for playing games and chatting with friends."
          screenshot={nightsInScreenshot}
          appURL="https://nights-in.herokuapp.com/"
          repoURL="https://github.com/JFunck1990/Nights-In"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-4 md:row-start-3">
        <PortfolioItem
          name="Munchies"
          description="An app for users to record their favorite restaurants and menu items."
          screenshot={munchiesScreenshot}
          appURL="https://project2-teamfive.herokuapp.com/"
          repoURL="https://github.com/imanid-code/Munchies"
        />
      </div>

      <div className="col-span-2 row-span-1 row-start-5 md:row-start-3">
        <PortfolioItem
          name="Budget Tracker"
          description="An app to allow users to keep track of their finances both on- and off-line."
          screenshot={budgetTrackerScreenshot}
          appURL="https://budget-tracker30.herokuapp.com/"
          repoURL="https://github.com/John-Paul-Grace/Budget-Tracker"
        />
      </div>
    </div>
  )
}

export default PortfolioSection;