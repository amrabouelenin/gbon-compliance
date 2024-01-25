import React from "react";
import { useState, useEffect } from "react";

import "./ObservationsTbl.css";

import { apiEndpoint } from "../../Api.js";
import { useParams } from "react-router";

const ObservationsTbl = (props) => {
  // console.log(props.props);
  const params = useParams();
  const [stations, setStations] = useState([]);
  useEffect(() => {
    let iso3 = params.country;
    let quarter = params.quarter;
    let year = params.year;
    let baseline = params.baseline.toLowerCase();

    let url =
      apiEndpoint +
      `/stations_obs?iso3=${iso3}&quarter=${quarter}&year=${year}&baseline=${baseline}`;
    (async () => {
      const data = await fetch(url).then((res) => res.json());
      setStations(data);
    })();
  }, []);

  let obsStations = [];

  for (let i = 0; i < stations.length; i++) {
    let compliance_percent =
      (stations[i]["received"] / stations[i]["target"]) * 100;
    compliance_percent = Math.round(compliance_percent * 100) / 100;
    obsStations.push(
      <tr key={i}>
        <td>{stations[i]["wigosid"]}</td>
        <td>{stations[i]["name"]}</td>
        <td>{stations[i]["received"]}</td>
        <td>{stations[i]["target"]}</td>
        <td>{compliance_percent}%</td>
      </tr>
    );
  }
  // console.log(obsStations)
  return (
    <div className="obstbl_wrapper">
      <table className="obstbl">
        {/* <tr className="th_bg">
          <td className="year_quarter_col">2022-Q3</td>
          <td colSpan={3}>Observations</td>
        </tr> */}
        <thead className="th_bg">
          <tr>
            <td>wigosid</td>
            <td>Station Name</td>
            <td>Received</td>
            <td>Target</td>
            <td>Compliance</td>
          </tr>
        </thead>
        <tbody>{obsStations}</tbody>
      </table>
    </div>
  );
};

export default ObservationsTbl;
