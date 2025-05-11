const cartList = ["Milk", "Bread", "Apples"];
const momCartList = ["Juice", "Pop"];

cartList.splice(cartList.indexOf("Bread"), 1, "Bananas", "Eggs");

console.log(cartList.pop());
cartList.sort();
console.log(cartList.indexOf("Milk"));

cartList.splice(cartList.indexOf("Bananas") + 1, 0, "Carrots", "Lettuce");

const updatedList = cartList.concat(momCartList, momCartList);

console.log(updatedList.lastIndexOf("Pop"));
console.log(updatedList);
