const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const cases = input[0];
const arr = input[1]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => b - a); // Math.max(...arr)라는 다른 방법도 존재함

const highestScore = arr[0];

// let newScores = [];
let sum = 0;

arr.forEach((item) => {
  // newScores.push((item / highestScore) * 100);
  sum += (item / highestScore) * 100;
});

// 굳이 reduce를 쓸 필요가?
// const result = newScores.reduce((arr, curr) => arr + curr, 0) / cases;

console.debug(sum / cases);
// console.log(result);
