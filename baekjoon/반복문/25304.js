const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 방법 1
// const sum = input.shift();
// const products = input.shift();

// let result = 0;
// for (let i = 0; i < products; i++) {
//   const [num1, num2] = input[i].split(" ");

//   result += +num1 * +num2;
// }

// if (+sum === result) {
//   return console.log("Yes");
// } else {
//   return console.log("No");
// }

const [sum, _productCount, ...products] = input.map((line) => line.split(" "));

const totalSum = products.reduce((acc, [num1, num2]) => acc + num1 * num2, 0);

if (+sum === totalSum) {
  console.log("Yes");
} else {
  console.log("No");
}
