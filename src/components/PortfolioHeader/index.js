import React from "react";

const PortfolioHeader = () => {
  return (
    <div className="col-span-2 md:col-span-4 row-span-1 text-center bg-red-200 py-3 border-b-8 border-blue-800">
      <span className="text-3xl font-bold">Portfolio Highlights</span>
      <br />
      For a full portfolio, view my <a href="https://github.com/John-Paul-Grace" target="_blank" rel="noreferrer">github page here</a>
    </div>
  )
}

export default PortfolioHeader;