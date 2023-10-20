const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = parseInt(input);

let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n + i; j++) {
    if (j <= n - i) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}

for (let j = n; j > 1; j--) {
  for (let k = 1; k < n + j - 1; k++) {
    if (k <= n + 1 - j) {
      str += " ";
    } else {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);
