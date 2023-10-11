const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// let result = "";
// for (let i = 0; i < +input; i++) {
//   for (let j = 1; j < +input - i; j++) {
//     result += " ";
//   }

//   result += `${"*".repeat(i + 1)}\n`;
// }

// console.log(result);

let num = Number(input);

let star = new Array(num).fill(" ");

for (let i = num - 1; i >= 0; i--) {
  star[i] = "*";

  console.log(star.join(""));
}
