const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const target = +input / 4;

let result = "";
for (let i = 0; i < target; i++) {
  result += "long ";
}

result += "int";

console.log(result);
