import axios from "axios";

class MembrosRepo {
  async listarMembros() {
    try {
      const options = {
        HEADERS: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*"
        }
      };
      const tsvMembros = await axios.get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQwqLrX5-hWVMBPKXcxnt6pM6u9W2-UWh9cvflG0GYOhkX-UoZnPevrR3DLSDwflJqvfVdIpND-vXyk/pub?output=tsv`,
        options
      );
      return tsvMembros;
    } catch (erro) {
      console.log(`Erro no repositório de membros: ${erro}`);
    }
  }
}
export default new MembrosRepo();
