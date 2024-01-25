import React from "react";
import "./Home.css";
import homeImage from "./compliance.png";
import { useState, useEffect } from "react";
import { apiEndpoint } from "../../Api";

function getCountriesListHtml(elements, members) {
  elements.push(
    <option key={"none"} value="None">
      Select Member
    </option>
  );
  for (let i = 0; i < members.length; i++) {
    elements.push(
      <option key={i} value={members[i]["iso3"]}>
        {members[i]["name"]}
      </option>
    );
  }
  return elements;
}

const Home = (props) => {
  const [members, setMembers] = useState([]);
  // get members list
  useEffect(() => {
    (async () => {
      const data = await fetch(apiEndpoint + "/member").then((res) =>
        res.json()
      );
      setMembers(data);
    })();
  }, []);

  // handle change of member from home page
  const handleChange = (e) => {
    console.log(e.target.value);
    var member_selected = e.target.value;
    window.location.href =
      window.location.origin +
      `/country/map/${member_selected}/standard/GBON/Q3/2023`;
  };

  // Get the list of members as a dropdown
  let elements = [];
  elements = getCountriesListHtml(elements, members);
  return (
    <div>
      <div key={"home-filter"} id="menu" className="country-page-filter">
        <span className="menu-element select-countries">
          <label htmlFor="countries">Member:</label>
          <select
            className="select-css"
            id="menu-countries"
            name="countries"
            onChange={handleChange}
          >
            {elements}
          </select>
        </span>
      </div>
      <div key={"home-content"} className="home_content">
        <img src={homeImage} className="home_image home_left" />
        <div className="home_right">
          <h2>Stats</h2>
          <h4>
            <ul>
              <li key={1}>Number of compliant members: 36</li>
              <li key={2}>Gap surface stations: 2520</li>
              <li key={3}>Gap upper-air stations: 370</li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
