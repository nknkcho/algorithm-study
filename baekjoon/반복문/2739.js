const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let result = "";
for (let i = 1; i <= 9; i++) {
  result += `${input} * ${i} = ${input * i}\n`;
}

console.log(result);
