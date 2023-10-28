const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 첫번째 풀이
// const [N, M] = input[0].split(" ");
// const arr = input.slice(1);
// const copy = [...arr];
// const result = Array.from({ length: N }, () =>
//   Array.from({ length: M }, () => 0)
// );

// let count = copy.length;

// while (count !== 0) {
//   for (let j = 0; j < +N; j++) {
//     if (arr[0] === undefined) {
//       console.log(result.map((item) => item.join(" ")).join("\n"));
//       return;
//     }
//     const targetArr = arr[0].split(" ").map(Number);
//     for (let t = 0; t < +M; t++) {
//       result[j][t] = result[j][t] + targetArr[t];
//     }
//     arr.shift();
//   }
//   count--;
// }

// 리팩토링 버전
const [N, M] = input[0].split(" ").map(Number);
const matrixA = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));
const matrixB = input
  .slice(N + 1, 2 * N + 1)
  .map((row) => row.split(" ").map(Number));

const result = Array.from({ length: N }, (_, i) =>
  Array.from({ length: M }, (_, j) => matrixA[i][j] + matrixB[i][j])
);

console.log(result.map((row) => row.join(" ")).join("\n"));
