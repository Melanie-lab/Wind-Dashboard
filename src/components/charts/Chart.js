import React from "react";
import Highcharts from "highcharts";
import stockChart from "highcharts";
import HighchartsReact from "highcharts-react-official";
import arkona from "../../data/forecasts_arkona.json";
import Data from "./DataProcess";
import { dataWG, firstdayWS } from "./DataProcess";

const options = {
  chart: {
    type: "spline",
    height: 200,
    width: 320,
    spacingLeft: 10,
  },
  title: {
    text: "Arkona",
  },
  yAxis: {
    title: "",
  },
  xAxis: {
    categories: [
      "2:00",
      "5:00",
      "8:00",
      "11:00",
      "14:00",
      "17:00",
      "20:00",
      "23:00",
    ],
  },

  series: [
    {
      name: "ws",
      data: firstdayWS,
    },
    {
      name: "wind gust",
      data: dataWG(arkona, 1),
    },
  ],
  legend: {
    align: "right",
    verticalAlign: "bottom",
    floating: true,
  },
};

const Chart = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        /*  constructorType={stockChart} */
      />
    </div>
  );
};

export default Chart;
