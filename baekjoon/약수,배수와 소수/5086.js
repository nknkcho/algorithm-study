const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let ans = "";

input.forEach((item) => {
  const [a, b] = item.split(" ").map(Number);

  if (a === 0 && b === 0) return;

  if (a % b !== 0 && b % a !== 0) {
    ans += `neither\n`;
  }

  if (a % b === 0) {
    ans += `multiple\n`;
  }

  if (b % a === 0) {
    ans += `factor\n`;
  }
});

console.log(ans);
