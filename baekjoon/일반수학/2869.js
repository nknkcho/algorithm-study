const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, v] = input;
const day = (v - b) / (a - b);
console.log(Math.ceil(day));
