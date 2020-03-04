import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ReactApexCharts from "react-apexcharts";
import {
  obterValores,
  obterAlvo,
  obterCategorias,
  obterDataSet,
  renderConfianca
} from "../OkrUtils";

export const keyResult = props => {
  const dataSet = obterDataSet(props);
  const categories = obterCategorias(dataSet);
  const target = obterAlvo(dataSet, props);
  const values = obterValores(dataSet);
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography
          style={{ fontSize: "1rem", fontWeight: 300, color: "#ffffff" }}
        >
          {props.okr.KeyResult}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        {renderConfianca(props.okr.Confianca)}
      </Grid>
      <Grid item xs={12}>
        <ReactApexCharts
          options={{
            chart: {
              height: 20,
              type: "line",
              background: "rgba(41, 40, 61, 0)",
              toolbar: { show: false }
            },
            colors: ["#1c68b1", "#57bb8a"],
            fill: {
              type: "solid",
              opacity: [0.5, 1]
            },
            legend: { show: false },
            theme: { mode: "dark" },
            xaxis: {
              categories: categories
            }
          }}
          series={[
            {
              name: "Okr",
              type: "area",
              data: values
            },
            {
              name: "Meta",
              type: "line",
              data: target
            }
          ]}
          type="area"
          height={200}
        />
      </Grid>
    </Grid>
  );
};

export default keyResult;
