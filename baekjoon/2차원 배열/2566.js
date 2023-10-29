const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 첫번째 답변
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const N = input.length; // 불필요한 변수
// const M = input[0].split(" ").length; // 불필요한 변수

// let largestNum = 0;
// let location = [0, 0];

// for (let i = 0; i < N; i++) {
//   const [...arr] = input[i].split(" ").map(Number);
//   const num = Math.max(...arr); // 배열 중에서 가장 큰 수

//   if (num >= largestNum) {
//     largestNum = num;
//     location[0] = i + 1;
//     location[1] = arr.indexOf(num) + 1;
//   }
// }

// console.log(largestNum + "\n" + location.join(" "));

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let largestNum = -Infinity;
let location = [0, 0];

input.forEach((arr, rowIndex) => {
  const maxOfRow = Math.max(...arr);
  const colIndex = arr.indexOf(maxOfRow);

  if (maxOfRow > largestNum) {
    largestNum = maxOfRow;
    location = [rowIndex + 1, colIndex + 1];
  }
});

console.log(largestNum + "\n" + location.join(" "));
