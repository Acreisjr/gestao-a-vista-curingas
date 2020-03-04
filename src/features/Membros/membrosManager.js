const tratarMembros = membrosTSV => {
  const linha = membrosTSV.data.split("\r\n");
  const cabecalhos = linha[0].split("\t");

  const result = linha.map(item => {
    const obj = {};
    const linhaAtual = item.split("\t");
    for (let j = 0; j < cabecalhos.length; j++) {
      obj[cabecalhos[j]] = linhaAtual[j];
    }
    return obj;
  });
  return result;
};

const membrosParaObjetos = (squads, todosMembros) => {
  return squads.reduce((acumulador, squad) => {
    var membrosSquad = todosMembros.filter(resposta =>
      resposta.squad.includes(squad.Squad)
    );
    if (membrosSquad.length) acumulador[squad.Squad] = membrosSquad;
    return acumulador;
  }, {});
};

export { tratarMembros, membrosParaObjetos };
