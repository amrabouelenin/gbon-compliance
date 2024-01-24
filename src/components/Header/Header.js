import React from "react";
import "./Header.css";
import logoWMO from "../../images/logos/logo_wmo.png";
import logoECMWF from "../../images/logos/logo_ecmwf.png";

const Header = (props) => {
  return (
    <header className="app-header">
      <a href="/gbon-compliance">
        <img src={logoWMO} id="logo-wmo" className="logo" alt="logo WMO" />
      </a>

      <h1 className="full-text">GBON compliance monitoring app</h1>
      {/* <img src={logoECMWF} id="logo-ecmwf" className="logo" alt="logo ECMWF" /> */}
    </header>
  );
};

export default Header;
