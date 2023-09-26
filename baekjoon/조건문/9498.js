const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// const getGrade = (num) => {
//   if (num >= 90 && num <= 100) {
//     return "A";
//   }

//   if (num >= 80 && num <= 89) {
//     return "B";
//   }

//   if (num >= 70 && num <= 79) {
//     return "C";
//   }

//   if (num >= 60 && num <= 69) {
//     return "D";
//   }

//   return "F";
// };

// 아래와 같은 리팩토링이 가독성에 더 좋다
const getGrade = (num) => {
  const gradeRanges = [
    { min: 90, max: 100, grade: "A" },
    { min: 80, max: 89, grade: "B" },
    { min: 70, max: 79, grade: "C" },
    { min: 60, max: 69, grade: "D" },
  ];

  for (const range of gradeRanges) {
    if (num >= range.min && num <= range.max) {
      return range.grade;
    }
  }

  return "F";
};

console.log(getGrade(+input));
