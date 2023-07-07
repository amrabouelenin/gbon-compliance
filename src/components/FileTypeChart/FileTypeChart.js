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

const data = [
  {
    name: "Q1",
    UpperAir: 40,
    Surface: 24,
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
    Surface: 43,
    amt: 2100,
  },
];
const FileTypeChart = (props) => {
  let tbl_1 = summaryTable("Surface Compliance", "No");
  let tbl_2 = summaryTable("Upper-Air Compliance", "Yes");
  return (
    <div className="ftype_chart">
      <span className="chart_block" id="chart_1">
        {tbl_1}
        <span className="chart_title">Evolution of horizontal resolution, in percent</span>
        <LineChart
          title={"Evolution of horizontal resolution, in percent"}
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis label={''} dataKey="name"  />
          <YAxis unit={'%'} label={{ value: 'Percent of target resolution', angle: -90, position: 'Left' }} />
          <Tooltip />
          <Legend />
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
