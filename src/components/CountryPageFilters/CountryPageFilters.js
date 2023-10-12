import React from "react";
import "./CountryPageFilters.css";
import reducer from "../reducers"; // Import the reducer
import { useReducer } from "react";

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

const CountryPageFilters = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = () => {
    dispatch({ type: "decrement", data: [] });
    console.log("test");
  };
  console.log(state);
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
        <span className="menu-element select-countries">
          <label htmlFor="resolution">Resolution:</label>
          <select
            className="select-css"
            id="menu-countries"
            name="countries"
            onChange={handleChange}
          >
            <option value="standard">Standard</option>
            <option value="high-density">High-density</option>
          </select>
        </span>
        <span className="menu-element select-countries">
          <label htmlFor="baseline">Baseline:</label>
          <select className="select-css" id="menu-countries" name="countries">
            <option value="GBON">GBON</option>
            <option value="all_stations">All stations</option>
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
