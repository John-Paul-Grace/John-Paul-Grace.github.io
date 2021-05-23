import React from "react";
import jpgBrandLogo from "../../images/JPG-Brand-Logo.png";

const Header = () => {
  return (
    // <!-- Bootstrap Navigation Bar -->
    <div className="pt-3">

      {/* <!-- This puts my name in the navbar --> */}
      <img className="mr-auto ml-auto rounded-lg border-gray-500 border-8" src={jpgBrandLogo} width="50%" alt="LinkedIn" />
    </div>
  );
}

export default Header;