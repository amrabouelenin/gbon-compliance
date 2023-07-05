import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";

import CountryPageFilters from "../CountryPageFilters/CountryPageFilters";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
const CountryPage = (props) => {
  return (
    <div>
      <CountryMap />
      <CountryPageFilters />
      <FileTypeChart />
    </div>
  );
};

export default CountryPage;
