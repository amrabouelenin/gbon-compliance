import React from "react";
import "./CountryPageFilters.css";
import reducer from "../reducers"; // Import the reducer
import { useReducer } from "react";
import { useState, useEffect } from "react";
import { apiEndpoint } from "../../Api";

// get the list of members as a dropdown
function getCountriesListHtml(elements, members, iso3) {
  for (let i = 0; i < members.length; i++) {
    var selected = false;
    if (members[i]["iso3"] == iso3) {
      selected = iso3;
    }
    elements.push(
      <option key={i} selected={selected} value={members[i]["iso3"]}>
        {members[i]["name"]}
      </option>
    );
  }
  return elements;
}
// get the list of options as a dropdown
function getListHtml(elements, options, selected_option) {
  for (let i = 0; i < options.length; i++) {
    var selected = false;
    if (options[i] == selected_option) {
      selected = "selected";
    }
    elements.push(
      <option key={i} selected={selected} value={options[i]}>
        {options[i]}
      </option>
    );
  }
  return elements;
}

// get the list of resolutions as a dropdown
function getListResolutionHtml(elements, options, selected_option) {
  for (let i = 0; i < options.length; i++) {
    var selected = false;
    let option = "Standard";
    if (options[i] == "highres") {
      option = "High Density";
    }
    if (options[i] == selected_option) {
      selected = "selected";
    }
    elements.push(
      <option key={i} selected={selected} value={options[i]}>
        {option}
      </option>
    );
  }
  return elements;
}

const CountryPageFilters = (props) => {
  const [members, setMembers] = useState([]);
  let iso3 = props.props.params.country;
  let resolution = props.props.params.resolution;
  let baseline = props.props.params.baseline;
  let quarter = props.props.params.quarter;
  let year = props.props.params.year;

  useEffect(() => {
    (async () => {
      const data = await fetch(apiEndpoint + "/member").then((res) =>
        res.json()
      );
      setMembers(data);
    })();
    // iso3 = props.props.params.country;
    // resolution = props.props.params.resolution;
    // baseline = props.props.params.baseline;
    // quarter = props.props.params.quarter;
    // year = props.props.params.year;
  }, []);

  // Get the list of members
  let members_options = [];

  members_options = getCountriesListHtml(members_options, members, iso3);

  // Get the list of resolutions
  let resolutions_options = [];

  let resolutions = ["standard", "highres"];
  resolutions_options = getListResolutionHtml(
    resolutions_options,
    resolutions,
    resolution
  );

  // Get the list of baselines
  let baselines_options = [];

  let baselines = ["GBON", "All"];
  baselines_options = getListHtml(baselines_options, baselines, baseline);

  // Get the list of quarters
  let quarters_options = [];

  let quarters = ["Q3", "Q4"];
  quarters_options = getListHtml(quarters_options, quarters, quarter);

  // Get the list of years
  const now = new Date().getFullYear();
  let currentYear = 2023;
  console.log(currentYear);

  let years_options = [];

  let years = Array.from({ length: 1 }, (_, index) => currentYear - index);
  years_options = getListHtml(years_options, years, year);

  // OnChange Events for the filters
  // Handle the change of member filter
  const handleCountryChange = (e) => {
    console.log(e.target.value);
    window.location.href =
      window.location.origin +
      `/gbon-compliance/country/map/${e.target.value}/${resolution}/${baseline}/${quarter}/${year}`;
  };
  // Handle the change of resolution filter
  const handleResolutionChange = (e) => {
    console.log(e.target.value);
    window.location.href =
      window.location.origin +
      `/gbon-compliance/country/map/${iso3}/${e.target.value}/${baseline}/${quarter}/${year}`;
  };
  // Handle the change of baseline filter
  const handleBaselineChange = (e) => {
    console.log(e.target.value);
    window.location.href =
      window.location.origin +
      `/gbon-compliance/country/map/${iso3}/${resolution}/${e.target.value}/${quarter}/${year}`;
  };
  // Handle the change of quarter filter
  const handleQuarterChange = (e) => {
    console.log(e.target.value);
    // quarter = e.target.value.replace("Q", "q");
    window.location.href =
      window.location.origin +
      `/gbon-compliance/country/map/${iso3}/${resolution}/${baseline}/${e.target.value}/${year}`;
  };
  // Handle the change of year filter
  const handleYearChange = (e) => {
    console.log(e.target.value);
    window.location.href =
      window.location.origin +
      `/gbon-compliance/country/map/${iso3}/${resolution}/${baseline}/${quarter}/${e.target.value}`;
  };

  return (
    <>
      <div className="title-map">GBON Compliance Monitoring</div>
      <div id="menu" className="country-page-filter">
        <span className="menu-element select-countries">
          <label htmlFor="countries">Member:</label>
          <select
            className="select-css"
            id="menu-countries"
            name="countries"
            onChange={handleCountryChange}
          >
            {members_options}
          </select>
        </span>
        <span className="menu-element select-resolution">
          <label htmlFor="resolution">Resolution:</label>
          <select
            className="select-css"
            id="menu-resolution"
            name="resolution"
            onChange={handleResolutionChange}
          >
            {resolutions_options}
          </select>
        </span>
        <span className="menu-element select-countries">
          <label htmlFor="baseline">Baseline:</label>
          <select
            className="select-css"
            id="menu-countries"
            name="baseline"
            onChange={handleBaselineChange}
          >
            {baselines_options}
          </select>
        </span>
        <span className="menu-element select-quarter">
          <label htmlFor="quarter">Quarter:</label>
          <select
            className="select-css"
            id="menu-quarter"
            name="quarter"
            onChange={handleQuarterChange}
          >
            {quarters_options}
          </select>{" "}
        </span>

        <span className="menu-element select-years">
          <label htmlFor="years">Year:</label>
          <select
            className="select-css"
            id="menu-years"
            name="years"
            onChange={handleYearChange}
          >
            {years_options}
          </select>
        </span>
      </div>
    </>
  );
};

export default CountryPageFilters;
