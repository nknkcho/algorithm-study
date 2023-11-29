const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let num = Number(input);
let line = 1;
let a;
let b;

while (num > line) {
  num -= line;
  line += 1;
}

if (line % 2 === 0) {
  a = num;
  b = line - num + 1;
}

if (line % 2 === 1) {
  a = line - num + 1;
  b = num;
}

console.log(`${a}/${b}`);
