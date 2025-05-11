const people = {
  friends: [],
};

const john = { id: 123, name: "john" };
const peter = { id: 124, name: "peter" };
const max = { id: 125, name: "max" };

people.friends.push(john, peter, max);

console.log(people);
