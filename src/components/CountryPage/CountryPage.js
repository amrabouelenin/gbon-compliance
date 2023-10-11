import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
const CountryPage = (props) => {
  let p = (

    <div className="text_compliance">
    Status for Q2/2023 :{" "}  <span className={"w3-badge w3-red"}>{"non-compliant"}</span>
    <ul>
      <li>Surface target: 33</li>
        <li>Surface number of reporting: 40</li>
      <li className={"li_surface"}>
      Surface compliance: compliant (HZ: 150 km<sup>2</sup>)​
      </li>
      <li>Upper-air target: 7</li>
        <li>Upper-air number of reporting: 2</li>
      <li className={"li_temp"}>
      Upper-air compliance: non-compliant(HZ: 2000 km<sup>2</sup>)​
      </li>
    </ul>
  </div>

  );

  return (
    <div>
      <CountryMap />
      <div className="placeholer_info">{p} </div>
      <FileTypeChart />
    </div>
  );
};

export default CountryPage;
