const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 첫번째 제출
// const standard = {
//   A: 4,
//   B: 3,
//   C: 2,
//   D: 1,
//   F: 0,
//   P: 0,
// };

// let creditSum = 0;
// let creditWithGradeSum = 0;

// for (const result of input) {
//   const [, credit, grade] = result.split(" ");
//   const [alphabet] = grade.split("");
//   const numOfGrade = standard[alphabet] + (grade.includes("+") ? 0.5 : 0);

//   creditSum += alphabet === "P" ? 0 : +credit;
//   creditWithGradeSum += +credit * numOfGrade;
// }

// 첫번째 제출에 대한 리팩토링
const GRADE_VALUES = {
  // 의미는 명확히, 상수화는 대문자
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
  P: 0,
};

const calculateGradePoint = (grade) => {
  const baseGradeValue = GRADE_VALUES[grade.charAt(0)];
  const isPlus = grade.includes("+");

  return baseGradeValue + (isPlus ? 0.5 : 0);
};

let totalCredits = 0;
let weightedGradeSum = 0;

for (const result of input) {
  const [, creditString, grade] = result.split("");
  const credit = parseInt(creditString, 10);

  if (grade !== "P") {
    totalCredits += credit;
    weightedGradeSum += credit * calculateGradePoint(grade);
  }
}

// 답 호출
console.log(creditWithGradeSum / creditSum);
