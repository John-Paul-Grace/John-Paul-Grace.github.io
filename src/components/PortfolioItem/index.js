import React from "react";

const PortfolioItem = ({ name, screenshot, appURL, repoURL }) => {
  return (
    <div className="col-span-2 row-span-1">
      <img className="border-black border-2 w-3/4 mb-2 rounded-lg ml-auto mr-auto" src={screenshot} alt={`${name} Screenshot`} />
      <div className="text-center border-4 border-red-400 rounded">
        <div className="bg-blue-600">
          <span className="text-lg font-bold text-white">{name}</span>
        </div>
        <div className="bg-blue-300">
          <a href={appURL} target="_blank" rel="noreferrer">
            Check out the app here.
          </a>
          <hr className="border-0 h-3" />
          <a href={repoURL} target="_blank" rel="noreferrer">
            Find the repository here.
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;