import React, { useEffect, useRef } from "react";
import "./BarGraph";
import * as echarts from "echarts";
import data from "../../asset/Wine-Data.json";

const BarGraph: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          name: "Alcohol",
          type: "value",
          axisLabel: {
            axisLabel: {
              margin: 50, // add extra margin to the bottom of the label
            },
          },
         
          min: 0.5,
          max: 4,
        },
        yAxis: {
          name: "Magnesium",
          type: "value",
          axisLabel: {
            axisLabel: {
              margin: 100, // add extra margin to the bottom of the label
              offset: 0, // add extra offset to move the label to the right
            },
          },
        },
        series: [
          {
            type: "bar",
            data: data.map((item) => [item.Alcohol, item.Magnesium]),
            barMaxWidth: 30,
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ height: "300px" }} />;
};

export default BarGraph;
