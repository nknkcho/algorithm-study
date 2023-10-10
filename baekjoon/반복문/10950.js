const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testNum = input.shift();

let result = "";
for (let i = 0; i < testNum; i++) {
  const [num1, num2] = input[i].split(" ");

  result += `${+num1 + +num2}\n`;
}

console.log(result);
