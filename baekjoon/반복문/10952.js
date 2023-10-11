const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testCase = input.splice(0, input.length - 1);

for (const element of testCase) {
  const [num1, num2] = element.split(" ");

  console.log(+num1 + +num2);
}
