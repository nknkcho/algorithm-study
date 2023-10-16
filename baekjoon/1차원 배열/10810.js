const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [target, ...arr] = input;
const [boxes, caseNum] = target.split(" ");

let initialArr = new Array(+boxes).fill(0);

// 범위 내에 0이면 마지막 숫자를 넣기, 범위 내에 없으면 0 그대로 유지
// 만약 범위 내에 이미 숫자가 있으면 교환하기, 범위 내에 없으면 그대로 유지
for (let i = 0; i < +caseNum; i++) {
  const [startNum, endNum, ball] = arr[i].split(" ");

  for (let j = +startNum - 1; j < +endNum; j++) {
    initialArr[j] = +ball;
  }
}

console.log(initialArr.join(" "));
