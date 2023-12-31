import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./w3.css";
import "./FileTypeChart.css";

const FileTypeChart = (props, data) => {
  // let tbl_1 = summaryTable("Surface Compliance", "No");
  // let tbl_2 = summaryTable("Upper-Air Compliance", "Yes");

  return (
    <div className="ftype_chart">
      {/* <div className="text_compliance">
        Status for Q2/2023 :{" "}
        <span className={"w3-badge w3-red"}>{"non-compliant"}</span>
        <ul>
          <li className={"li_surface"}>
            Surface: compliant (HZ: 200 km<sup>2</sup>)​
          </li>
          <li className={"li_temp"}>
            Upper-air: non-compliant (HZ: 2000 km<sup>2</sup>)​
          </li>
        </ul>
      </div> */}
      <span className="chart_block" id="chart_1">
        {/* {tbl_1} */}
        {/* <span className="chart_title">
          Evolution of horizontal resolution, in percent
        </span> */}
        <LineChart
          title={"Evolution of horizontal resolution, in percent"}
          width={650}
          height={200}
          data={props.date}
          margin={{
            top: 5,
            // right: 30,
            left: 120,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis label={""} dataKey="name" />
          <YAxis
            unit={"%"}
            label={{
              value: "Percent of target resolution",
              position: "insideLeft",
              angle: -90,
              dy: 90,
            }}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line dataKey="Surface" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line dataKey="UpperAir" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </span>
    </div>
  );
};

const summaryTable = (message, status) => {
  let badge_color = "w3-badge w3-green";
  if (status === "No") {
    badge_color = "w3-badge w3-red";
  }
  return (
    <div className="exmption_tbl">
      <table className="summary_tbl">
        <tbody>
          <tr className="th_bg">
            <td colSpan={2}>Exemption granted</td>
          </tr>
          <tr className="th_bg">
            <td>Area</td>
            <td>Reasons</td>
          </tr>
          <tr>
            <td>XY</td>
            <td>Security</td>
          </tr>
          <tr>
            <td>XZ</td>
            <td>Topography</td>
          </tr>
        </tbody>
      </table>
      <div className="compliance_txt">
        {message} <span className={badge_color}>{status}</span>
      </div>
      <div className="compliance_txt">
        {"UpperAir Compliance"}{" "}
        <span className={"w3-badge w3-green"}>{"Yes"}</span>
      </div>
    </div>
  );
};

export default FileTypeChart;
