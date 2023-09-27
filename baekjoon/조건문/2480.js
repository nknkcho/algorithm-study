const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

const targetInput = input.sort();
const excludeDuplicatedNum = [...new Set(input)]; // 중복된 값을 걸러낸 배열
const duplicatedNum = [
  ...new Set(input.filter((item, index) => input.indexOf(item) !== index)),
]; // 중복된 값이 무엇인지 담긴 배열

if (excludeDuplicatedNum.length === 3) {
  return console.log(100 * targetInput[targetInput.length - 1]);
}

if (excludeDuplicatedNum.length === 2) {
  return console.log(1000 + 100 * duplicatedNum);
}

if (excludeDuplicatedNum.length === 1) {
  return console.log(10000 + 1000 * duplicatedNum);
}
