import React from "react";

const Navbar = () => {
  return (
    // <!-- Bootstrap Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          {/* <!-- This puts my name in the navbar --> */}
          <a class="navbar-brand" href="./index.html">John Paul Grace</a>

          {/* <!-- This causes the links to collapse into a button when the screen is small enough --> */}
          {/* <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> --> */}
        
          {/* <!-- These are the links that will be collapsed when the screen is small enough --> */}
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>

              <li class="nav-item active">
                <a class="nav-link" href="/about-me">About Me<span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
  );
}

export default Navbar;