const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [target, arr] = input;

const targetNum = target.split(" ");

const solution = arr.split(" ").filter((item) => +item < +targetNum[1]);
console.log(solution.join(" "));
