const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input.map((item) => +item);

let result = "";
for (let i = 0; i < 30; i++) {
  if (!arr.includes(i + 1)) {
    result += `${i + 1}\n`;
  }
}

console.log(result);
