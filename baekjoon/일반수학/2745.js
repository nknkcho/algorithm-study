const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [N, B] = input;
// 첫번째 풀이.. 근데 진법을 이해한 풀이라고 볼 수 없음
// const result = parseInt(N, +B);

const formation = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const calculation = (target, n) => {
  let sum = 0;

  for (let i = target.length - 1; i >= 0; i--) {
    sum += formation.indexOf(target[i]) * n ** i;
  }

  return sum;
};

const result = calculation(N.split("").reverse().join(""), +B);
console.debug(result);

// 2진수 1010을 10진수 10으로 바꿀 때의 계산법
// 1010
// 2의 3승, 2의 2승, 2의 1승, 2의 0승
// (1 * 2의 3승) + (0 * 2의 2승) + (1 * 2의 1승) + (0 * 2의 0승)

// 36진수 ZZZZZ를 10진수로 바꿀 때의 계산법
// ZZZZZ
// 36의 4승, 36의 3승 ...
// (35 * 36의 4승) + (35 * 36의 3승) ...
// 주의해야 할 점 : 예시로 준 문자열은 모든 문자가 동일할 경우. 다른 문자라면 순서를 뒤집어주어야 함
