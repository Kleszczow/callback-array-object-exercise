let drinks = [
  { name: "cola", ml: 330, from: { country: "USA", state: "DC" } },
  { name: "monster", ml: 500, from: { country: "USA", state: "NY" } },
  { name: "yerba", ml: 1000, from: { country: "Parague", state: "unknow" } },
];

const drink = drinks
  .filter((item) => {
    return item.from.country === "USA" && item.ml > 400;
  })
  .map((item) => {
    return `${item.name} ${item.ml}ml`;
  });

const value = drinks
  .filter((item) => {
    return item.ml > 400;
  })
  .map((item) => {
    return `${item.name}`;
  });
console.log(drink);
console.log(value);
