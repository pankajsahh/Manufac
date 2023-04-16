import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./ScatterPlot.css";
import data from "../../asset/Wine-Data.json";

const ScatterPlot: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          name: "Flavanoids",
          type: "value",
        },
        yAxis: {
          name: "Ash",
          type: "value",
        },
        series: [
          {
            type: "scatter",
            data: data.map((item, id) => {
              return [item.Flavanoids, item.Ash];
            }),
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ height: "300px" }} />;
};

export default ScatterPlot;
