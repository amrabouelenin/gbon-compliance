import React from "react";
import "./CountryPageFilters.css";

const CountryPageFilters = (props) => {
  return (
    <>
      <div className="title-map">GBON Compliance Monitoring App</div>
      <div id="menu" className="country-page-filter">
        <span className="menu-element select-countries">
          <label htmlFor="countries">Member:</label>
          <select className="select-css" id="menu-countries" name="countries">
            <option value="IND">India</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </span>
        <span className="menu-element select-quarter">
          <label htmlFor="quarter">Quarter:</label>
          <select className="select-css" id="menu-quarter" name="quarter">
            <option value="q1">Q1</option>
            <option value="2022">Q2</option>
            <option value="2023">Q3</option>
            <option value="2023">Q4</option>
          </select>{" "}
        </span>

        <span className="menu-element select-years">
          <label htmlFor="years">Year:</label>
          <select className="select-css" id="menu-years" name="years">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2023">2021</option>
            <option value="2023">2020</option>
          </select>
        </span>
      </div>
    </>
  );
};

export default CountryPageFilters;
