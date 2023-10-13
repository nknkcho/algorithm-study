const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let maxNum = +input[0];
let index = 0;

for (let i = 0; i < input.length; i++) {
  if (maxNum < +input[i]) {
    maxNum = +input[i];
    index = i + 1;
  }

  // 예외 케이스(즉, 최대값이 첫번째 인덱스일 경우)를 챙기지 않아서 자꾸 틀렸음.
  if(maxNum === +input[0]) {
    index = 1;
  }
}

console.log(`${maxNum}\n${index}`);
