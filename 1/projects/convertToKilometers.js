const ONE_MILE_FROM_KILOMETR = 1.609344;

const convertToKilometers = (miles) => {
  const kilometers = (miles * ONE_MILE_FROM_KILOMETR).toFixed(4);
  return `Расстояние ${miles} миль. Равно ${kilometers} км`;
};
