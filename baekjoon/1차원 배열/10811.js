const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 방법 1 : 하지만 데이터가 커졌을 때에는 중간에 배열을 분리하여 뒤집는 로직이 다소 비효율적
// const [, ...arr] = input;
// const [baskets, orders] = input[0].split(" ").map(Number);

// let initialArr = Array.from({ length: baskets }, (_, idx) => idx + 1);

// for (let i = 0; i < orders; i++) {
//   const [f, s] = arr[i].split(" ").map(Number);
//   let reversedArr = [];

//   for (let j = f - 1; j < s; j++) {
//     reversedArr.push(initialArr[j]);
//   }

//   reversedArr.reverse();
//   // splice의 활용 방법에 대해서 다양하게 외우기
//   initialArr.splice(f - 1, s - f + 1, ...reversedArr);
// }

// console.log(initialArr.join(" "));

// 방법 2: 배열의 중간에서 요소를 추가하거나 제거하지 않고 배열의 특정 부분만 뒤집기 때문에, 큰 배열에서도 효율적으로 작동
const [baskets, _orders] = input[0].split(" ").map(Number);
const orderLists = input.slice(1).map((order) => order.split(" ").map(Number));

let basketArr = Array.from({ length: baskets }, (_, idx) => idx + 1);

orderLists.forEach(([start, end]) => {
  let left = start - 1;
  let right = end - 1;

  while (left < right) {
    [basketArr[left], basketArr[right]] = [basketArr[right], basketArr[left]];
    left++;
    right--;
  }
});

console.log(basketArr.join(" "));
