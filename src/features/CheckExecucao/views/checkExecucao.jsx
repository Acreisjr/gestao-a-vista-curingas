import React from "react";
import ReactApexCharts from "react-apexcharts";
import {
  retornaSegundoItem,
  substituirScoreCE,
  filtrarScoresCE
} from "../CheckExecucaoUtils";

export const checkExecucao = props => {
  const scores = filtrarScoresCE(props);
  const categories = substituirScoreCE(scores);
  const data = retornaSegundoItem(scores);
  return (
    <ReactApexCharts
      options={{
        chart: {
          type: "radar",
          background: "rgba(41, 40, 61, 0)"
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#ffffff",
              fill: {
                colors: ["#ffffff20"]
              }
            }
          }
        },
        colors: ["#1c68b1"],
        fill: {
          colors: ["#1c68b1"],
          opacity: 0.9
        },
        markers: { size: 0 },
        stroke: {
          show: false
        },
        theme: {
          mode: "dark",
          palette: "palette8"
        },
        yaxis: {
          show: false
        },
        xaxis: {
          categories: categories,
          labels: {
            show: true,
            style: {
              colors: ["#ffffff"],
              fontSize: "0.7rem",
              fontFamily: "Poppins"
            }
          }
        }
      }}
      series={[
        {
          name: "",
          data: data
        }
      ]}
      type="radar"
      height={500}
    />
  );
};

export default checkExecucao;
