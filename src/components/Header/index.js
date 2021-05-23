import React from "react";
import jpgBrandLogo from "../../images/JPG-Brand-Logo.png";

const Header = () => {
  return (
    <div className="pt-3">
      <img className="mr-auto ml-auto rounded-lg border-gray-500 border-8" src={jpgBrandLogo} width="50%" alt="LinkedIn" />
    </div>
  );
}

export default Header;