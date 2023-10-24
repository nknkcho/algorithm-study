const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 첫번째 방법
// const [N, ...words] = input;
// let count = 0;

// for (let i = 0; i < +N; i++) {
//   const wordArr = words[i].split("");

//   let uniqueArr = [];
//   for (let j = 0; j < wordArr.length; j++) {
//     if (
//       uniqueArr[uniqueArr.length - 1] !== wordArr[j] &&
//       uniqueArr.includes(wordArr[j])
//     ) {
//       break;
//     } else {
//       uniqueArr.push(wordArr[j]);
//     }
//   }

//   if (uniqueArr.length === wordArr.length) {
//     count++;
//   }
// }

// console.log(count);

// 리팩토링 + Set을 통해 더욱 효율적인 방법
const words = input.slice(1);
let count = 0;

for (let word of words) {
  let seen = new Set(); // 이미 본 문자를 저장하는 Set
  let prevChar = null; // 이전에 본 문자를 저장하는 변수
  let isGroupWord = true;

  for (let char of word) {
    if (seen.has(char) && char !== prevChar) {
      // 이미 본 문자이면서 이전 문자와 다를 경우 그룹 단어가 아님
      isGroupWord = false;
      break;
    }
    seen.add(char); // 현재 문자를 Set에 추가
    prevChar = char; // 현재 문자를 이전 문자로 설정
  }

  if (isGroupWord) count++;
}

console.log(count);
