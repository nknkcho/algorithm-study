const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, arr] = input;

const numArr = arr
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

console.log(`${numArr[0]} ${numArr[N - 1]}`);

// const numArr = arr.split(" ").map((item) => +item);

// let minNum = numArr[0];
// let maxNum = numArr[0];

// for (let i = 0; i < +N; i++) {
//   if (numArr[i] > maxNum) {
//     maxNum = numArr[i];
//   }

//   if (numArr[i] < minNum) {
//     minNum = numArr[i];
//   }
// }

// console.log(minNum, maxNum);
