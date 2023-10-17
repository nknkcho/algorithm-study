const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let result = [];
input.forEach((item) => {
  const remain = +item % 42;

  if (!result.includes(remain)) {
    result.push(remain);
  }
});

console.log(result.length);

// 중복 제거를 더 간단하게 하는 방법: Set
// const remainders = new Set(input.map(item => +item % 42)) // 결과 예시 : Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
// console.log(remainders.size) // length가 아니라 size인 점에 주목
