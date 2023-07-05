import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./ObservationsTbl.css";
import { tab } from "@testing-library/user-event/dist/tab";

const ObservationsTbl = (props) => {
  return (
    <table className="obstbl">
      <tr className="th_bg">
        <td className="year_quarter_col">2022-Q3</td>
        <td colspan="3">Observations</td>
      </tr>
      <tr className="th_bg">
        <td>Station Name</td>
        <td>Received</td>
        <td>Target</td>
        <td>Compliance</td>
      </tr>
      <tr >
        <td>Station #1</td>
        <td>50</td>
        <td>70</td>
        <td>71.4%</td>
      </tr>
      <tr>
        <td>Station #2</td>
        <td>50</td>
        <td>80</td>
        <td>79.4%</td>
      </tr>
      <tr>
        <td>Station #3</td>
        <td>50</td>
        <td>60</td>
        <td>61.4%</td>
      </tr>
    </table>
  );
};

export default ObservationsTbl;
