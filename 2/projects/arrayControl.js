const cartList = [];

const car = {
  name: "audi",
  model: "v2",
  amount: 2000,
  count: 2,
};

const book = {
  name: "war",
  model: "classic",
  amount: 100,
  count: 4,
};

const pen = {
  name: "peniels",
  model: "v22",
  amount: 200,
  count: 98,
};

cartList.push(car, book, pen);
console.log(cartList[2].count);
