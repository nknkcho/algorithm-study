const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let target = input;
let count = 0;

croatia.forEach((word) => {
  let index = target.indexOf(word);

  while (index !== -1) {
    count++; // 크로아티아 알파벳으로 카운트
    target = target.replace(word, " "); // 해당 크로아티아 알파벳을 공백으로 대체
    index = target.indexOf(word);
  }
});

console.debug("target : ", target);
count += target.replace(/ /g, "").length; // 대체되지 않은 일반 알파벳의 수를 카운트
console.log(count);
