import React from "react";

const PortfolioItem = ({ name, screenshot, appURL, repoURL }) => {
  return (
    <div class="row">
      <div class="screenshot-col col-lg-8">
        <img class="screenshot mr-2 mb-2" src={screenshot} alt="Project screenshot" />
      </div>

      <div class="col-lg-4">
        <div class="screenshot-description">
          <span>{name}</span>
          App Link:<a class="screenshot-link" href={appURL} target="_blank">
            {appURL}
          </a>
          Repository Link:<a class="screenshot-link" href={repoURL} target="_blank">
            {repoURL}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;