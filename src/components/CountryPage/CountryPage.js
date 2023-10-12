import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
import { useReducer } from "react";
import reducer from "../reducers"; // Import the reducer

const initialState = {
  data: [
    {
      name: "Q1",
      UpperAir: 40,
      Surface: 70,
      amt: 2400,
    },
    {
      name: "Q2",
      UpperAir: 30,
      Surface: 13,
      amt: 2210,
    },
    {
      name: "Q3",
      UpperAir: 20,
      Surface: 98,
      amt: 2290,
    },
    {
      name: "Q4",
      UpperAir: 100,
      Surface: 39,
      amt: 2000,
    },
    {
      name: "Q1",
      UpperAir: 18,
      Surface: 48,
      amt: 2181,
    },
    {
      name: "Q2",
      UpperAir: 23.9,
      Surface: 38,
      amt: 2500,
    },
    {
      name: "Q3",
      UpperAir: 34,
      Surface: 90,
      amt: 2100,
    },
  ],
};

const CountryPage = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let p = (
    <div className="text_compliance">
      Status for Q2/2023 :{" "}
      <span className={"w3-badge w3-red"}>{"non-compliant"}</span>
      <ul>
        <li>Surface target: 33</li>
        <li>Surface number of reporting: 40</li>
        <li className={"li_surface"}>
          Surface compliance: compliant (HR: 150 km<sup>2</sup>)​
        </li>
        <li>Upper-air target: 7</li>
        <li>Upper-air number of reporting: 2</li>
        <li className={"li_temp"}>
          Upper-air compliance: non-compliant(HR: 2000 km<sup>2</sup>)​
        </li>
      </ul>
    </div>
  );
  console.log(state.data);
  return (
    <div>
      <CountryMap />
      <div className="placeholer_info">{p} </div>
      <FileTypeChart date={state.data} />
    </div>
  );
};

export default CountryPage;
