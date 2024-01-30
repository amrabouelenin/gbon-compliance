import React from "react";

import "./CountryPage.css";
import CountryMap from "../CountryMap/CountryMap";
import FileTypeChart from "../FileTypeChart/FileTypeChart";
import { useReducer } from "react";
import { useState, useEffect } from "react";

import reducer from "../reducers"; // Import the reducer
import CountryPageFilters from "../CountryPageFilters/CountryPageFilters";

import { apiEndpoint } from "../../Api";
import { useParams } from 'react-router';

// http://127.0.0.1:5000/api/1.0/member_status?iso3=BLR&quarter=3&year=2023&baseline=gbon&resolution=standard

const CountryPage = (props) => {
  const [memberStatus, setMemberStatus] = useState([]);
  const [timeseriesData, setTimeseriesData] = useState([]);
  const params= useParams()

  console.log(params);
  let iso3 = params.country;
  let quarter = params.quarter;
  let year = params.year;
  let baseline = params.baseline.toLowerCase();
  let resolution = params.resolution.toLowerCase();
  let chartData = [];
  let p = <div></div>;
  // get compliance information for that member country
  useEffect(() => {
    let url =
      apiEndpoint +
      `/member_status?iso3=${iso3}&quarter=${quarter}&year=${year}&baseline=${baseline}&resolution=${resolution}`;
    (async () => {
      const data = await fetch(url).then((res) => res.json());

      setMemberStatus(data);
    })();
  }, []);

  useEffect(() => {
    let url =
      apiEndpoint +
      `/timeseries?iso3=${iso3}&quarter=${quarter}&year=${year}&baseline=${baseline}&resolution=${resolution}`;
    (async () => {
      const data = await fetch(url).then((res) => res.json());

      setTimeseriesData(data);
    })();
  }, []);

  if (memberStatus.length > 0) {
    let compliant = "Compliant";
    let compliant_class = "w3-badge w3-green";
    let up_compliant = "Compliant";
    if (memberStatus[1]["compliant"] == false) {
      up_compliant = "Non-compliant";
    }
    let surface_compliant = "Compliant";
    if (memberStatus[0]["compliant"] == false) {
      surface_compliant = "Non-compliant";
    }
    if (
      memberStatus[0]["compliant"] == false ||
      memberStatus[1]["compliant"] == false
    ) {
      compliant = "Non-compliant";
      compliant_class = "w3-badge w3-red";
    }
    let surface_hr =
      Math.round(memberStatus[0]["horizontal_resolution"] * 100) / 100;
    let upperair_hr =
      Math.round(memberStatus[1]["horizontal_resolution"] * 100) / 100;
    let surface_hr_per = Math.round(
      memberStatus[0]["horizontal_resolution_per"] * 100
    );
    let upperair_hr_per = Math.round(
      memberStatus[1]["horizontal_resolution_per"] * 100
    );
    p = (
      <div className="text_compliance">
        Status for {quarter.toUpperCase()} / {year} :{" "}
        <span className={compliant_class}>{compliant}</span>
        <ul>
          <li>Surface target: {memberStatus[0]["nr_target"]}</li>
          <li>
            Surface number of reporting: {memberStatus[0]["nr_reporting"]}
          </li>
          <li className={"li_surface"}>
            Surface compliance: {surface_compliant} (HR: {surface_hr} km
            <sup>2</sup>)​
          </li>
          <li>Upper-air target: {memberStatus[1]["nr_target"]}</li>
          <li>
            Upper-air number of reporting: {memberStatus[1]["nr_reporting"]}
          </li>
          <li className={"li_temp"}>
            Upper-air compliance: {up_compliant}(HR: {upperair_hr} km
            <sup>2</sup>)​
          </li>
        </ul>
      </div>
    );

    console.log(memberStatus);
  }

  if (timeseriesData.length > 0) {
    console.log(timeseriesData);
    chartData.push({
      name: "Q3",
      UpperAir: timeseriesData[1]["horizontal_resolution_per"] * 100,
      Surface: timeseriesData[0]["horizontal_resolution_per"] * 100,
    });

    chartData.push({
      name: "Q4",
      UpperAir: timeseriesData[3]["horizontal_resolution_per"] * 100,
      Surface: timeseriesData[2]["horizontal_resolution_per"] * 100,
    });
  }
  return (
    <>
      <CountryPageFilters props={props} />
      <main className="app-content">
        <div>
          <CountryMap props={props} />
          <div className="placeholer_info">{p} </div>
          <FileTypeChart data={chartData} props={props} />
        </div>
      </main>
    </>
  );
};

export default CountryPage;
