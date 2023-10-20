const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const reversed = input.split("").reverse().join("");
console.log(input === reversed ? 1 : 0);

// const len = input.length / 2;
// const left = input.slice(0, parseInt(len));
// const right = input.slice(Number.isInteger(len) ? len : parseInt(len) + 1);

// if (left === right.split("").reverse().join("")) {
//   console.log(1);
// } else {
//   console.log(0);
// }
