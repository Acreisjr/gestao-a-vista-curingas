import axios from "axios";
import moment from "moment";

// Classe para pegar os dados de datas dos ritos
class SquadRepo {
  async listarSquads() {
    const options = {
      HEADERS: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      }
    };
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQjGoFas8fHS3-ikJ36ZGi4vsgFYVGSDwqm0Nvj_Fuz5J0tuIajrzTB0jhdohG4S_lrDzFaycoA0Bbs/pub?output=tsv`,
        options
      )
      .then(response => {
        debugger;
        var lines = response.data.split("\r\n");

        var result = [];
        var headers = lines[0].split("\t");

        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split("\t");

          for (var j = 0; j < headers.length; j++) {
            if (headers[j].includes("Data")) {
              obj[headers[j]] = moment(currentline[j], "DD/MM/YYYY");
            } else if (headers[j].includes("Score")) {
              obj[headers[j]] = Number(currentline[j].replace(",", "."));
            } else {
              obj[headers[j]] = currentline[j];
            }
          }

          result.push(obj);
        }
        return result;
      })
      .catch(error => {
        console.log(`Erro no repositório de ritos:`, error);
      });
  }
}

export default new SquadRepo();
