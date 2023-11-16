const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, B] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

// 첫번째 풀이
// let answer = "";

// if (N == 0) {
//   console.log(0);
// } else {
//   while (N > 0) {
//     console.debug("N%B : ", N % B);
//     let s = notation(N % B);
//     answer = s + answer;
//     console.debug("Math.floor(N/B) : ", Math.floor(N / B));
//     N = Math.floor(N / B);
//   }
//   console.log(answer);
// }

// function notation(x) {
//   if (x < 10) return x;
//   return String.fromCharCode(x + 55);
// }

// 두번째 풀이
const ans = N.toString(B).toUpperCase();
console.log(ans);
