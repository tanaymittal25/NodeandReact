// console.log("Hello World");

// const a = 10;
// const b = 20;

// console.log(a + b);

// function compute( a, b) {
// 	console.log(a * b);
// }

// compute(10, 20);

const {compute} = require("./SampleSecondNodeJs");

console.log(compute(10, '+', 20));
console.log(compute(10, '-', 20));
console.log(compute(10, '*', 20));
console.log(compute(10, '/', 20));
