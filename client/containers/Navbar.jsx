import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div id="logo-main-container">
        <img id="logo-main"  width="50"></img>
      </div>

      <ul className="nav-links">
        <li>
          <a
            href=""
            target="_blank"
          >
            NPM PACKAGE
          </a>
        </li>
        <li>
          <a href="#field">DEMO</a>
        </li>
        <li>
          <a href="#team">TEAM</a>
        </li>
        <li>
          <a href="https://github.com/oslabs-beta/olympus" target="_blank">
            GITHUB
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;