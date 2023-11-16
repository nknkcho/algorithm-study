const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const pow = 2 ** input;

const result = (pow + 1) ** 2;

console.log(result);