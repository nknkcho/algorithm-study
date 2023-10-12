const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [_N, S, v] = input;

const result = S.split(" ").filter((item) => +item === +v).length;

console.log(result);
