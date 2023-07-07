import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="wdqms-footer">
      <span>&copy; WMO</span>
      <span>
        Version:{" "}
        <a
          href="https://confluence.ecmwf.int/display/WIGOSWT/Releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_VERSION} 0.1
        </a>
      </span>
    </footer>
  );
};

export default Footer;
