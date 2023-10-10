const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// 방법1
// let result = 0;
// for (let i = 0; i <= +input; i++) {
//   result += i;
// }

// console.log(result);

const numbers = Array.from({ length: +input }, (_, i) => i + 1);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
