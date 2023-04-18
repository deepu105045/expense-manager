import React from "react";
import { Chart } from "react-google-charts";



export const options = {
  title: "Cash flow",
  curveType: "function",
  legend: { position: "bottom" },
};

const LineChart = (props) =>{
    return(
        <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={props.data}
        options={options}
      />
    );
}

export default LineChart