const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 답변 1
// 초기 설정값 추출
const [target, ...arr] = input;
const [baskets, cases] = target.split(" ");

// 바구니 초기화
let initialArr = new Array(+baskets).fill().map((_, index) => index + 1);
let result = [...initialArr];

// 각 케이스에 따라 바구니 위치 변경
for (let i = 0; i < +cases; i++) {
  const [f, s] = arr[i].split(" ");

  result[+f - 1] = initialArr[+s - 1];
  result[+s - 1] = initialArr[+f - 1];

  initialArr = [...result];
}

// 답변 1에 대한 리팩토링
// // 초기 설정값 추출
// const [baskets, cases] = input[0].split(" ").map(Number);

// // 바구니 초기화
// let result = Array.from({ length: baskets }, (_, idx) => idx + 1); // [1, 2, 3, 4, 5]

// // 각 케이스에 따라 바구니 위치 변경
// for (let i = 1; i <= cases; i++) {
//   const [firstIdx, secondIdx] = input[i]
//     .split(" ")
//     .map((num) => Number(num) - 1);

//   [result[firstIdx], result[secondIdx]] = [result[secondIdx], result[firstIdx]];
// }

// 답 제출
console.debug(result.join(" "));
