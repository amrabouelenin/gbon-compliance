import React from "react";

import "./w3.css";
import "./FileTypeChart.css";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
const chartSetting = {
  yAxis: [
    {
      label: "Percentage of target resolution",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-5px, 0)",
    },
  },
};

const FileTypeChart = (props, data) => {
  console.log(props.data);
  if (props.data.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="ftype_chart">
        <span className="chart_block" id="chart_1">

          <BarChart
            dataset={props.data}
            xAxis={[{ scaleType: "band", dataKey: "name" }]}
            series={[
              { dataKey: "UpperAir", label: "UpperAir" },
              { dataKey: "Surface", label: "Surface" },
            ]}
            {...chartSetting}
          />
        </span>
      </div>
    );
  }
};


export default FileTypeChart;
