import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { map } from "lodash";
import KeyResult from "./keyResult";
import { agruparPorObjetivos } from "../OkrUtils";

export const okr = props => {
  const objectives = agruparPorObjetivos(props);

  return (
    <Container
      maxWidth="xl"
      style={{
        height: "100%"
      }}
    >
      <Grid container style={{ padding: 16 }}>
        {map(objectives, (value, key) => {
          return (
            <Grid container item xs={12} key={key} spacing={2}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#ffffff"
                  }}
                >
                  {key}
                </Typography>
              </Grid>
              {map(value, okr => (
                <Grid item xs={6} key={okr.KeyResult}>
                  <KeyResult okr={okr} />
                </Grid>
              ))}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default okr;
