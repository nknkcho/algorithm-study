const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let chessPieces = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < input.length; i++) {
  chessPieces[i] -= input[i];
}

console.debug(chessPieces.join(" "));
