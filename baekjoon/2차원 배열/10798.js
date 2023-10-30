const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let ans = "";
let maxLength = 0; // 문제를 잘 읽자. 최대 단어의 길이가 15글자까지 갈 수 있다.

for (let i = 0; i < input.length; i++) {
  if (input[i].length > maxLength) {
    maxLength = input[i].length;
  }
}

for (let i = 0; i < input.length; i++) {
  while (maxLength > input[i].length) {
    input[i] += " ";
  }
}

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    ans += input[j][i];
    // if (input[j][i] !== " ") { // 다른 방법
    //   ans += input[j][i];
    // }
  }
}

console.debug(ans.split(" ").join(""));
