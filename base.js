const data = [1, 2, 3, 4, 5];

const newforRach = data.forEach((a) => {
  console.log(a);
});
//kazdy element tej funckji dostajemy jako osobn parament
const newMap = data.map((b) => {
  return b * 2;
});
//zwraca nam nowqa tablice na  której mozemy robić roózne działaniea albo dopisywać wartości itp
const newFiltr = data.filter((c) => {
  return c > 3;
});
//filter zwraca nam nowa tablice z wynikami
console.log("old", data);
console.log("forEach", newforRach);
console.log("Map", newMap);
console.log("filtr", newFiltr);

const produkcts = [
  { name: "nsBike", price: 6000 },
  { name: "BITTER", price: 4000 },
  { name: "TREK", price: 10000 },
  { name: "ROMET", price: 200 },
];

const bestPrice = produkcts
  .filter((bike) => {
    return bike.price > 1000;
  })
  .map((bike) => {
    return `${bike.name}`;
  });
console.log(bestPrice);

//sortingNumbers

const numbers = [13, 22, 188, 43, 25];

let sorted = numbers.sort((a, b) => a - b);

console.log(sorted);
