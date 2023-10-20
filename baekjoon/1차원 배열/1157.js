const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase();

const inputArr = input.split("");
const set = new Set(input);
const uniqueArr = [...set];

let initialArr = new Array(uniqueArr.length).fill(0);

for (let i = 0; i < uniqueArr.length; i++) {
  let num = 0;

  inputArr.forEach((item) => {
    if (item === uniqueArr[i]) num += 1;
  });

  initialArr[i] = num;
}

const sort = [...initialArr].sort((a, b) => b - a);
const result =
  sort[0] === sort[1] ? "?" : uniqueArr[initialArr.indexOf(sort[0])];

console.log(result);
