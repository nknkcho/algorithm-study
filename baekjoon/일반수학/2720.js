const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const coin = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};

const [count, ...arr] = input;
const ans = Array.from({ length: +count }, () =>
  Array.from({ length: 4 }, () => 0)
);
console.debug('ans : ', ans);

for (let i = 0; i < +count; i++) {
  let anchor = arr[i];

  for (let j = 0; j < ans[i].length; j++) {
    while (anchor > 0) {
      if (anchor >= coin.quarter) {
        ans[i][0] = Math.floor(anchor / coin.quarter);
        anchor = anchor % coin.quarter;
      }

      if (anchor >= coin.dime) {
        ans[i][1] = Math.floor(anchor / coin.dime);
        anchor = anchor % coin.dime;
      }

      if (anchor >= coin.nickel) {
        ans[i][2] = Math.floor(anchor / coin.nickel);
        anchor = anchor % coin.nickel;
      }

      if (anchor >= coin.penny) {
        ans[i][3] = Math.floor(anchor / coin.penny);
        anchor = anchor % coin.penny;
      }
    }
  }
}

console.log(ans.map((item) => item.join(" ")).join("\n"));
