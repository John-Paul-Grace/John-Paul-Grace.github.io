import React from "react";
import githubLogo from "../../images/github.png";
import linkedInLogo from "../../images/linkedIn_logo.png";
import brandLogo from "../../images/logo192.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-gray-500 w-full p-3">
      <div className="grid grid-cols-3 justify-center gap-2">

        <div>
          <nav className="justify-self-start text-blue-200 text-lg font-semibold space-x-2">
            <a href="#introduction">Introduction |</a>
            <a href="#portfolio">Portfolio |</a>
            <a href="#portfolio">Resume</a>
          </nav>
          <span className="text-center text-white float">©Copyright 2021 John Paul Grace</span>
        </div>

        <img
          className="justify-self-center rounded-xl border-black border-2"
          src={brandLogo}
          width="92px"
          alt="Headshot of John Paul Grace"
        />

        <div className="justify-self-end space-y-1 space-x-2 text-white">
          <span className="float-right">828-482-2619</span>
          <br />
          <span>gracejohnpaul200@gmail.com</span>
          <br />
          <a className="float-right" href="https://github.com/John-Paul-Grace" target="_blank" rel="noreferrer">
              <img className="bg-white" src={githubLogo} width="40px" alt="Github" />
          </a>
          <a className="float-right" href="https://www.linkedin.com/in/john-paul-grace/" target="_blank" rel="noreferrer">
              <img src={linkedInLogo} width="40px" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;