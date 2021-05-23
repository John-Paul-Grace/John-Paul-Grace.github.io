import React from "react";
import githubLogo from "../../images/github.png";
import linkedInLogo from "../../images/linkedIn_logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-gray-500 w-full p-3 text-xl">
      <div className="flex flex-row justify-center gap-2">
        <a href="https://github.com/John-Paul-Grace" target="_blank" rel="noreferrer">
            <img className="bg-white" src={githubLogo} width="50px" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/john-paul-grace/" target="_blank" rel="noreferrer">
            <img src={linkedInLogo} width="50px" alt="LinkedIn" />
        </a>
      </div>
      <div className="text-center text-white">
        ©Copyright 2021 John Paul Grace
      </div>
    </footer>
  )
}

export default Footer;