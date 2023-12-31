import React from "react";

import "./ObservationsTbl.css";

const ObservationsTbl = (props) => {
  return (
    <div className="obstbl_wrapper">
      <table className="obstbl">
        {/* <tr className="th_bg">
          <td className="year_quarter_col">2022-Q3</td>
          <td colSpan={3}>Observations</td>
        </tr> */}
        <tr className="th_bg">
          <td>Station Name</td>
          <td>Received</td>
          <td>Target</td>
          <td>Compliance</td>
        </tr>
        <tbody>
          <tr>
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
          <tr>
            <td>Station #4</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #5</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #6</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #7</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>

          <tr>
            <td>Station #8</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #9</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #10</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #11</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
          <tr>
            <td>Station #12</td>
            <td>50</td>
            <td>60</td>
            <td>61.4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ObservationsTbl;
