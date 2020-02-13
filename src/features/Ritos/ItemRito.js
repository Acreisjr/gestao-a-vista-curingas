import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import moment from 'moment';

export const ItemRito = props => {
  const squad = props.squad;
  return [
    <Grid key="a" item container xs={2} style={{ minHeight: 160 }}>
      <Grid item container justify="center" direction="column">
        <Typography style={{ fontSize: 28, fontWeight: 900 }}>{squad.Squad}</Typography>
      </Grid>
    </Grid>,
    <Grid key="b" item container xs={10} justify="center">
      <Grid item xs={1} container justify="center" direction="column" align="center">
        {andon(squad.Andon)}
      </Grid>
      <Grid
        item
        xs={1}
        style={corFarolEstoque(squad.Estoque)}
        container
        justify="center"
        direction="column"
        align="center"
      >
        <Typography variant="h6" style={{ color: '#ffffff', fontWeight: 900 }}>
          {squad.Estoque}
        </Typography>
      </Grid>
      {dateCell(squad.CheckArquitetural)}
      {dateCell(squad.CheckExecucao)}
      {dateCell(squad.RetroSquad)}
    </Grid>
  ];
};

const dateCell = data => {
  return (
    <Grid
      item
      xs
      style={corFarolData(moment().diff(data, 'days'))}
      container
      justify="center"
      direction="column"
      align="center"
    >
      <Typography variant="h3" style={{ color: '#ffffff', fontWeight: 900 }}>
        {data.isValid() ? data.format('DD/MM') : 'NOVO'}
      </Typography>
      {data.isValid() && (
        <Typography variant="h5" style={{ color: '#ffffff', fontWeight: 400 }}>
          Próximo:{' '}
          {moment(data)
            .add(14, 'days')
            .format('DD/MM')}
        </Typography>
      )}
    </Grid>
  );
};

const andon = andon => {
  switch (andon) {
    case 1:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#f6b26b' }} />;
    case 2:
      return <NotificationImportantIcon style={{ fontSize: 64, color: '#e95d6a' }} />;
    default:
      return <div />;
  }
};

const corFarolData = dias => {
  if (dias > 14) {
    return { backgroundColor: '#e95d6a' };
  } else if (dias === 14) {
    return { backgroundColor: '#f6b26b' };
  } else {
    return { backgroundColor: '#57bb8a' };
  }
};

const corFarolEstoque = estoque => {
  if (estoque === 'CONCRETO') {
    return { backgroundColor: '#57bb8a' };
  } else {
    return { backgroundColor: '#e95d6a' };
  }
};

export default ItemRito;
