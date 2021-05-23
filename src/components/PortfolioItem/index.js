import React from "react";

const PortfolioItem = ({ name, screenshot, appURL, repoURL }) => {
  return (
    <div className="row">
      <div className="screenshot-col col-lg-8">
        <img className="screenshot mr-2 mb-2" src={screenshot} alt="Project screenshot" />
      </div>

      <div className="col-lg-4">
        <div className="screenshot-description">
          <span>{name}</span>
          App Link:<a className="screenshot-link" href={appURL} target="_blank" rel="noreferrer">
            {appURL}
          </a>
          Repository Link:<a className="screenshot-link" href={repoURL} target="_blank" rel="noreferrer">
            {repoURL}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;