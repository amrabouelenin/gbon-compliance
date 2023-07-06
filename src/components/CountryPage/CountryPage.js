import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
const CountryPage = (props) => {
  return (
    <div>
      <CountryMap />
      <FileTypeChart />
    </div>
  );
};

export default CountryPage;
