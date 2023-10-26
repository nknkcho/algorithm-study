const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const standard = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
  P: 0,
};

let creditSum = 0;
let creditWithGradeSum = 0;

for (const result of input) {
  const [, credit, grade] = result.split(" ");
  const [alphabet] = grade.split("");
  const numOfGrade = standard[alphabet] + (grade.includes("+") ? 0.5 : 0);

  creditSum += alphabet === "P" ? 0 : +credit;
  creditWithGradeSum += +credit * numOfGrade;
}

console.log(creditWithGradeSum / creditSum);
