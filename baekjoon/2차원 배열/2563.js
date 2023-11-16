const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let boards = new Array(100).fill().map(() => new Array(100).fill(false));

const [loop, ...arr] = input;

for (let i = 0; i < +loop; i++) {
  const [x, y] = arr[i].split(" ").map(Number);

  for (let j = 0; j < 10; j++) {
    for (let t = 0; t < 10; t++) {
      boards[x + j][y + t] = true;
    }
  }
}

// const result = boards.reduce((prev, curr, index, arr) => {
//   for (const c of curr) {
//     if (c === true) {
//       prev++;
//     }
//   }
//   return prev;
// }, 0);

const result = boards.flat().filter((c) => c === true).length;
console.debug(result);
