import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Cadencia from "./Cadencia";
import GembaCheck from "./GembaCheck";
import CheckExecucao from "./CheckExecucao";
import PlanoDeAcao from "./PlanoDeAcao";
import { Membros } from "./Membros";

let estiloTitulo = { fontSize: "2rem", fontWeight: 900, color: "#ffffff" };

export const Squad = props => {
  return (
    <div
      style={{
        // Scroll ativo
        width: "auto",
        height: "auto",
        backgroundImage: `url(${props.squad.Cover})`,
        backgroundSize: "cover",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          // Degradê de Background preenchendo toda a página
          width: "100%",
          height: "100%",
          backgroundColor: "#29283ddd",
          overflow: "hidden"
        }}
      >
        <Typography
          style={{
            // Nome dos squads
            padding: 16,
            fontSize: "2.2rem",
            fontWeight: 600,
            color: "#ffffff",
            marginLeft: "2%"
          }}
        >
          {props.squad.Squad}
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item container xs={8} spacing={4} alignItems="flex-start">
            <Grid item xs={12}>
              <Cadencia squad={props.squad} />
            </Grid>

            {/* <Grid item xs={6} align="center">
              <Typography style={estiloTitulo}>Gemba Check</Typography>
              <GembaCheck squad={props.squad} />
            </Grid>
            <Grid item xs={6} align="center">
              <Typography style={estiloTitulo}>Check de Execução</Typography>
              <CheckExecucao squad={props.squad} />
            </Grid> */}
            <Grid item xs={12} align="center">
              <Typography style={estiloTitulo}>Plano de Ação</Typography>
              <PlanoDeAcao squad={props.squad} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Membros crafters={props.crafters} membros={props.membros} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Squad;
