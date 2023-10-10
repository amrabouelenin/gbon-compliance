import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
const CountryPage = (props) => {
  return (
    <div>
      <CountryMap />
      <div className="text_compliance">
        Status for Q2/2023 : <span className={"w3-badge w3-red"}>{"non-compliant"}</span>
        <ul>
          <li className={"li_surface"}>Surface: compliant (HZ: 200 km<sup>2</sup>)​</li>
          <li className={"li_temp"}>Upper-air: non-compliant (HZ: 2000 km<sup>2</sup>)​</li>
        </ul>
      </div>
      <FileTypeChart />
    </div>
  );
};

export default CountryPage;
