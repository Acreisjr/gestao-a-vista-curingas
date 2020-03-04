import moment from "moment";

const obterCorBackground = data => {
  const dias = moment().diff(data, "days");
  let backgroundColor = "#454545";
  if (dias > 14) {
    // Caso tenha excedido o tempo dos checks
    backgroundColor = "#e95d6a";
  } else if (dias === 14) {
    // Caso esteja quase excedendo o tempo dos checks
    backgroundColor = "#f6b26b";
  } else {
    // Caso esteja em dia com o tempo dos checks
    backgroundColor = "#57bb8a";
  }
  return backgroundColor;
};

export default obterCorBackground;
