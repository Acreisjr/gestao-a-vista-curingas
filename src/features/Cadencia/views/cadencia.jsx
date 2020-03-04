import React from "react";
import { Grid, Typography } from "@material-ui/core";
import obterCorBackground from "../cadenciaUtils";

let estiloTitulo = { fontSize: "1.6rem", fontWeight: 300, color: "#ffffff" };

export const cadencia = props => {
  return (
    // Grade com a cadência dos checks
    <Grid container align="center">
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Check Arquitetural</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Check de Execução</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={estiloTitulo}>Retro do Squad</Typography>
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataCheckArquitetural)}
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataCheckExecucao)}
      </Grid>
      <Grid item xs={4}>
        {obterDataComFarol(props.squad.DataRetroSquad)}
      </Grid>
    </Grid>
  );
};

// Retorna a data com a cor de fundo dependendo se a cadência etá correta

const obterDataComFarol = data => {
  let backgroundColor = obterCorBackground(data);
  return (
    <Typography
      style={{
        width: "64%",
        fontSize: "3rem",
        fontWeight: 900,
        backgroundColor: backgroundColor,
        color: "#ffffff"
      }}
    >
      {data.isValid() ? data.format("DD/MM") : "NOVO"}
    </Typography>
  );
};

export default cadencia;
