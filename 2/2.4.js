const myCar = {
  model: "v8",
  make: "Germany",
  wheels: 6,
};

let type = "color";
myCar[type] = "black";
type = "forSale";
myCar[type] = true;

const { make, model, forSale } = myCar;

console.log(`Model: ${model}, make in: ${make}, for sale: ${forSale}`);
