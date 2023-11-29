const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// let target = 1;

// for (let i = 1; i <= +input; i++) {
//   if (+input === 1) {
//     console.log(1);
//     break;
//   }
//   target += 6 * i;
//   if (target >= +input) {
//     console.log(i + 1);
//     break;
//   }
// }

let target = 1;
let layer = 0; // 현재 레이어

while (target < +input) {
  layer++; // 다음 레이어로 이동
  target += 6 * layer; // 다음 레이어의 마지막 방 번호 계산
}

console.log(layer + 1); // 중앙의 방을 포함하여 레이어 수 출력
