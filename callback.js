const logA = (callback) => {
  setTimeout(() => {
    console.log("a");
    const value = "hello";
    callback(value);
  });
};
const logB = (valefromA) => {
  console.log(valefromA);
  console.log("b");
};

logA(logB);

const add = (x, y) => {
  return x + y;
};
const calc = (c, d, callback) => {
  console.log(`wprowadzamy ${c} ora ${d}`);
  return callback(c, d);
};
const resolut = calc(10, 20, add);

console.log(resolut);
