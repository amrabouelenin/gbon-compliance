import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
const CountryPage = (props) => {
  return (
    <div>
      <CountryMap />
      <div className="text_compliance">
        Status for Q2/2023 : <b>non-compliant​</b>
        <ul>
          <li>Surface: compliant (HZ: 200 km^2)​</li>
          <li>Upper-air: non-compliant (HZ: 2000 km^2)​</li>
        </ul>
      </div>
      <FileTypeChart />
    </div>
  );
};

export default CountryPage;
