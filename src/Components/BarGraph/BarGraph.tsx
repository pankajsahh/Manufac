import React, { useEffect, useRef } from "react";
import './BarGraph'
import * as echarts from "echarts";
import data from "../../asset/Wine-Data.json";

const BarGraph: React.FC = () => {
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
            type: "bar",
            data: data.map((item, id) => {
              return [item.Flavanoids, item.Ash];
            }),
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ height: "400px" }} />;
};

export default BarGraph;
