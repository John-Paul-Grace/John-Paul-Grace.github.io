import React from "react";

const PortfolioHighlight = ({ name, screenshot, appURL, repoURL }) => {
  return (
    <div className="col-span-2 row-span-1">
      <img className="screenshot mb-2 rounded-lg ml-auto mr-auto" src={screenshot} alt={`${name} Screenshot`} />
      <div className="text-center border-4 border-red-400 rounded-lg">
        <div className="bg-blue-600">
          <span className="text-lg font-bold text-white">{name}</span>
        </div>
        <div className="bg-blue-300">
          <a className="screenshot-link" href={appURL} target="_blank" rel="noreferrer">
            Check out the app here.
          </a>
          <hr className="border-0 h-3" />
          <a className="screenshot-link" href={repoURL} target="_blank" rel="noreferrer">
            Find the repository here.
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHighlight;